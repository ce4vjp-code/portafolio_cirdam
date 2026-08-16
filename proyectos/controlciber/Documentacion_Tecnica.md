# Documentación Técnica - ControlCiber

Este documento detalla la arquitectura, el diseño de red y el código base del proyecto **ControlCiber**, desarrollado en C# bajo el ecosistema de .NET 10 (WPF). El objetivo del proyecto es administrar clientes en una LAN utilizando protocolos TCP y UDP para control de estado, ejecución de comandos y transmisión de escritorio remoto.

---

## 1. Arquitectura General y Topología

La aplicación utiliza un modelo Cliente-Servidor diseñado para Redes de Área Local (LAN):
- **ControlCiber.Server:** Interfaz gráfica en WPF que actúa como nodo maestro.
- **ControlCiber.Client:** Aplicación de consola/WPF oculta (`App.xaml` configurado sin ventanas emergentes) que actúa como servicio en segundo plano.

**Protocolos en uso:**
1. **UDP Broadcast (Puerto 9000):** Se usa para el mecanismo de *Discovery* (descubrimiento de red).
2. **TCP (Puertos 8000, 8001):** Usado para comandos encriptados/binarios, transferencia de archivos y confirmaciones de conexión.
3. **UDP (Puerto 8002):** Usado exclusivamente para la transmisión del flujo de imágenes (Desktop Streaming) debido a la baja latencia requerida.

---

## 2. Flujo de Comunicación en Red

### 2.1 Descubrimiento de Clientes (Discovery)
- **Servidor (`DiscoveryServer.cs`):** Envía un paquete UDP Broadcast con el mensaje `DISCOVER` por la red.
- **Cliente (`CyberClient.cs`):** Escucha permanentemente en el puerto 9000. Al recibir `DISCOVER`, extrae la IP del servidor que lo envió y se conecta a él mediante TCP (Puerto 8000).

### 2.2 Canal de Comandos (TCP 8000)
- **Servidor (`ControlServer.cs` y `ServerCore.cs`):** Recibe las conexiones TCP entrantes. Lee datos del cliente (ej. `INFO|NombreEquipo|Usuario`). 
- **Estructura de Comando:** Los comandos se parsean usando `MessageEncoder.cs`, que separa el identificador del comando del contenido payload (ej. `SHUTDOWN`, `LOCK`, `MSG|Texto`).
- El Servidor mantiene un diccionario concurrente (`ServerCore.Instance.Clients`) relacionando la IP del cliente con un objeto `ClientConnection`.

### 2.3 Transferencia de Archivos (TCP 8001)
- Separada del hilo principal de comandos para evitar bloqueos.
- Administrado por `FileServer.cs` en el servidor. Almacena en memoria o ruta física el archivo solicitado y genera un ID de archivo temporal.
- El servidor envía el comando: `FILE|Nombre|Tamaño|FileID`.
- El cliente, al recibirlo, abre un socket TCP contra el puerto 8001 del servidor, solicita el `FileID` y descarga el flujo de bytes, guardándolo en su escritorio o carpeta temporal, para luego abrirlo con `Process.Start`.

### 2.4 Streaming de Pantalla (UDP 8002)
Para lograr un visor remoto con bajo delay:
- **Cliente (`StreamClient.cs`):** Usa GDI+ (`Graphics.CopyFromScreen`) para capturar la pantalla. Las imágenes JPEG se reducen en calidad/escala y se fragmentan en *chunks* (paquetes) menores a 64KB (el límite de datagrama UDP) y se envían secuencialmente al servidor.
- **Recuperación de Errores:** En escenarios donde Windows impone permisos de UAC o el "Secure Desktop" se activa, GDI+ lanza excepciones. El `StreamClient.cs` está programado con un bloque `try-catch` dentro de su bucle de red para capturar el error `Win32Exception` y continuar esperando hasta que la pantalla vuelva a estar accesible, impidiendo que el hilo UDP se muera.
- **Servidor (`StreamServer.cs`):** Recibe los *chunks*, los reagrupa usando un identificador de fotograma y reconstruye el JPEG para pintarlo en un elemento `Image` del `ViewerWindow.xaml`.

---

## 3. Inyección de Inputs y Control Remoto

Cuando el "Control Remoto" está activo en el `ViewerWindow`:
- **Servidor:** Intercepta los eventos de teclado (`KeyDown`, `KeyUp`) y ratón (`MouseDown`, `MouseUp`, `MouseMove`). Las coordenadas del ratón se normalizan (0.0 a 1.0) en base a las dimensiones del contenedor visual de la imagen para que coincidan con la resolución real del cliente. Estos datos se envían por TCP.
- **Cliente (`InputInjector.cs`):** Depende de la API de Windows `user32.dll` (funciones P/Invoke como `SendInput` o `mouse_event`). Mapea las resoluciones proporcionales a las dimensiones absolutas reales de la pantalla y ejecuta los clicks físicos y pulsaciones de teclas en el sistema operativo del cliente.
- *Nota sobre Foco:* Para prevenir que los elementos interactivos del WPF (`ToggleButtons`) en el Servidor atrapen el teclado (ej. presionar *Enter* que desactiva el botón en lugar de enviarlo remotamente), la Interfaz de Usuario implementa `Focusable="False"` en todos los botones de la barra de control y título.

---

## 4. UI y Experiencia de Usuario (WPF)

- **Aesthetics (Diseño Visual):** El sistema fue refactorizado para tener una UI sin bordes estándar (`WindowStyle="None"`), con esquinas redondeadas (`AllowsTransparency="True"`) y barras de título creadas en XAML que usan un estilo Glassmorphism/Dark Theme moderno. 
- **Responsive:** Se emplea Grid layouts y `Uniform` stretch logic en los visualizadores de pantalla.
- **Iconografía:** Se utilizan iconos tipográficos de fuentes locales o *Segoe Fluent Icons* cargados a través de diccionarios de recursos (`App.xaml`).

---

## 5. Compilación y Despliegue

- **Script de Construcción:** El proyecto incluye `build_release.bat`, un archivo por lotes que invoca a MSBuild / `dotnet publish` con las configuraciones `-c Release -r win-x64 --self-contained`.
- El resultado genera ejecutables "Single File" libres de dependencias locales para despliegue directo tanto de `ControlCiber.Server.exe` como de `ControlCiber.Client.exe`.
