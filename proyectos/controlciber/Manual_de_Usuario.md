# Manual de Usuario - ControlCiber

Bienvenido al manual de usuario de **ControlCiber**, el sistema de gestión y monitoreo remoto diseñado para salas de informática, cibercafés y laboratorios. Este documento te guiará sobre cómo instalar, configurar y operar el sistema en tu red.

---

## 1. Arquitectura del Sistema

ControlCiber se divide en dos aplicaciones principales:
- **ControlCiber.Server.exe:** La aplicación que debes ejecutar en la computadora principal (el administrador). Proporciona la interfaz gráfica para gestionar los equipos de la red.
- **ControlCiber.Client.exe:** La aplicación que debe ejecutarse en todas las computadoras cliente. Opera de forma silenciosa en segundo plano (invisible para los usuarios) y obedece las órdenes del servidor.

---

## 2. Instalación y Primeros Pasos

### En los Clientes (Equipos a controlar)
1. Copia el archivo `ControlCiber.Client.exe` a la computadora cliente.
2. Ejecuta el archivo. No verás ninguna ventana ni icono; el programa se ejecutará en segundo plano inmediatamente.
3. *Opcional:* Para que se ejecute automáticamente cada vez que se enciende el equipo, puedes agregar un acceso directo de `ControlCiber.Client.exe` en la carpeta de Inicio de Windows (`shell:startup`).

### En el Servidor (Administrador)
1. Ejecuta el archivo `ControlCiber.Server.exe`.
2. Verás una pantalla de inicio y luego el Panel de Control.
3. El servidor comenzará automáticamente a "escuchar" en la red local la presencia de los equipos clientes.
4. Puedes presionar el botón **"Escanear Red"** en la barra superior si deseas forzar una búsqueda rápida de los clientes.

---

## 3. Panel de Control

El panel de control tiene un diseño moderno y oscuro, dividido en tres partes:

### A. Barra Superior y Acciones Globales
Aquí encontrarás botones para acciones que afectan a **todos** los equipos conectados a la vez:
- **Escanear Red:** Busca equipos en la red.
- **Mensaje a Todos:** Muestra un cuadro de diálogo en la pantalla de todas las computadoras con un texto.
- **Archivo a Todos:** Te permite enviar un archivo desde el servidor hacia todas las computadoras clientes simultáneamente.
- **Bloquear/Desbloquear Todos:** Bloquea los teclados y ratones o pantallas de todas las computadoras.
- **Reiniciar Todos:** Reinicia todos los equipos clientes.
- **Apagar Todos:** Apaga todos los equipos clientes.

### B. Lista de Computadoras
En el centro verás la lista de computadoras que están actualmente conectadas. Por cada una verás:
- Nombre de la computadora (ej. `PC-01`).
- IP de la computadora y usuario actual.
- Estado (Conectado / Bloqueado).

### C. Acciones Individuales (Por Computadora)
A la derecha de cada computadora en la lista, encontrarás los botones para gestionar **únicamente** ese equipo:
1. **Bloquear / Desbloquear (Candado):** Restringe el uso de esa PC específica.
2. **Visor / Control Remoto (Ojo):** Abre una ventana de "Visor Remoto" que te permite ver la pantalla del cliente en tiempo real.
3. **Enviar Mensaje:** Manda un texto a la pantalla de ese cliente.
4. **Enviar Archivo:** Permite transferir un archivo.
5. **Reiniciar.**
6. **Apagar.**

---

## 4. Visor y Control Remoto

Al hacer clic en el botón con el icono del **"Ojo"** en la lista de equipos, se abrirá la ventana del **Visor Remoto**.

- **Modo Visualización:** Por defecto, solo ves lo que hace el usuario en su pantalla de forma fluida. Tu teclado y ratón no afectan a la computadora remota.
- **Modo Control Remoto:** Si deseas interactuar, haz clic en el botón superior rojo **"Activar Control Remoto"**. 
  - El botón cambiará a color verde.
  - A partir de ese momento, todos los clics de tu ratón dentro del visor y todo lo que escribas en el teclado se enviará a la computadora remota en tiempo real.
  - Para salir del modo control y solo observar, vuelve a presionar el botón (que volverá a estar de color rojo).
- **Ventana:** Puedes mover, minimizar, maximizar o cerrar esta ventana usando los botones de la barra de título, igual que en el panel principal.

---

## 5. Preguntas Frecuentes y Consideraciones

- **¿Por qué no veo un cliente en la lista?** Asegúrate de que el firewall de Windows (o tu antivirus) en el cliente permita las conexiones para `ControlCiber.Client.exe`. Ambos equipos deben estar en la misma red LAN.
- **Control Remoto no escribe:** Verifica que el botón de Control Remoto esté en verde. El visor bloqueará tu teclado para evitar enviar teclas si está en modo solo visualización.
- **Errores al enviar archivos:** Asegúrate de que el puerto TCP usado por el sistema esté abierto y que haya permisos suficientes.
