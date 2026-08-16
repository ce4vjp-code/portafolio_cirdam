# Sprint Plan: ControlCiber (Estabilización y Control Remoto)

**Objetivo del Sprint**: Realizar pruebas de conexión masivas para validar el rendimiento de la red del laboratorio escolar y asentar las bases para el control remoto total de los equipos clientes.

## Tareas (Backlog)

### 1. Auditoría y Pruebas (Prioridad Alta)
- [ ] **Pruebas de Conexión Masiva**: Conectar de 30 a 40 clientes simultáneos al `ControlCiber.Server` y ejecutar el comando `LOCK`/`UNLOCK` para verificar latencia y rendimiento de red.
- [ ] **Pruebas de Streaming de Pantalla (Estrés)**: Activar `START_STREAM` en múltiples equipos a la vez y monitorear el consumo de RAM/CPU en el servidor.
- [ ] **Cobertura de Pruebas Unitarias (Red)**: Usar `/tdd` para asegurar que el protocolo de codificación de mensajes (`MSG` en Base64) y transferencia de archivos funcionan perfectamente bajo estrés.

### 2. Nuevas Funcionalidades (Control Total)
- [ ] **Diseñar Protocolo de Eventos I/O**: Añadir soporte en el Socket para recibir/enviar coordenadas de mouse y teclas presionadas (`MOUSE_MOVE`, `MOUSE_CLICK`, `KEY_PRESS`).
- [ ] **Implementar Inyección de Eventos en Cliente**: Usar llamadas a la API nativa de Windows (User32.dll / SendInput) en `ControlCiber.Client/Native` para simular clics y teclas enviadas por el servidor.
- [ ] **Actualizar UI del Servidor (`ViewerWindow`)**: Permitir capturar eventos de mouse y teclado del administrador en la ventana de stream y transmitirlos al cliente.

### 3. Deuda Técnica y Mantenimiento
- [x] **Manejo de Desconexiones Limpias**: Asegurar que cuando el cliente se cierra inesperadamente, el servidor libere los recursos del socket correctamente sin fugas de memoria.
