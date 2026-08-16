---
status: reverse-documented
date: 2026-08-15
verified-by: User
---

# Architecture Decision Record: Client-Server Network Protocol (ControlCiber)

> **Note**: This document was reverse-engineered from the existing implementation.
> It captures current behavior and clarified design intent. Some sections may be
> incomplete where implementation is partial or intent was unclear.

## Context and Problem Statement
ControlCiber requiere una arquitectura de red para gestionar de forma remota clientes en un laboratorio de informática de un liceo. Se necesitaba definir cómo el servidor enviaría comandos, transmitiría archivos y monitorizaría las pantallas de los estudiantes.

## Decision Drivers
*   **Seguridad**: La red opera en un entorno cerrado y acotado (laboratorio escolar).
*   **Rendimiento de Red**: La transmisión de pantalla debe consumir poco ancho de banda para no saturar la red local del laboratorio.
*   **Resiliencia**: El servidor debe poder reconectar clientes y mantener el estado de bloqueo si hay desconexiones.
*   **Extensibilidad**: Se requiere una base que soporte futuras implementaciones como control remoto total (mouse/teclado).

## Considered Options
*   Protocolos estándar (HTTP/REST, gRPC)
*   **Sockets TCP/UDP Personalizados (Seleccionado)**

## Decision Outcome
Se eligió implementar un sistema de **Sockets Personalizados (TCP/UDP)** que transmite comandos en texto plano y usa canales separados para transmisión de archivos (FileServer) y flujo de video (StreamServer).

### Mechanics Implemented
*   **Comandos de Sesión**: `LOCK`, `UNLOCK`, `SHUTDOWN`, `RESTART`.
*   **Mensajería (`MSG`)**: Los mensajes de texto se codifican en Base64 para evitar que los saltos de línea rompan el protocolo subyacente (ej. PING/PONG).
*   **Transferencia de Archivos (`FILE`)**: El servidor registra un archivo localmente con un `fileId` y los clientes lo solicitan.
*   **Visor de Pantalla (`START_STREAM`)**: El servidor inicia una ventana (`ViewerWindow`) y solicita al cliente enviar cuadros de imagen.
*   **Auto-Reconexión**: Los clientes intentan reconectarse continuamente al servidor para recibir su estado actual.

### Clarified Design Intent
1.  **Falta de Encriptación**: Es intencional. La red del liceo es segura y acotada, por lo que se priorizó la velocidad de desarrollo y el bajo uso de CPU sobre la encriptación de payloads.
2.  **Streaming de Bajo Ancho de Banda**: El visor actual (`ViewerWindow`) envía capturas ligeras para no saturar la red. Sin embargo, la arquitectura debe permitir en el futuro una actualización para control remoto total (VNC-style) una vez que se pasen las pruebas de estrés masivas.
3.  **Persistencia del Estado**: El servidor es la fuente de la verdad (Source of Truth). Si se interrumpe la conexión, al reconectarse, el cliente se actualiza constantemente para reflejar el estado correcto (ej. bloqueado/desbloqueado).

## Follow-up Work Recommended
1.  **Pruebas de Conexión Masiva**: Realizar pruebas de estrés conectando 30-40 clientes simultáneos para evaluar el consumo del protocolo antes de implementar el control remoto total.
2.  **Implementar Control Remoto Total**: Extender el protocolo para capturar y enviar eventos de mouse y teclado (`MOUSE_MOVE`, `KEY_PRESS`) del servidor al cliente.
