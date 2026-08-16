# Manual del Docente y Guía del Participante
## Curso: Microsoft Office 2019 Aplicado a la Gestión Escolar
### Módulo 4: Excel Intermedio – Automatización Lógica, Búsqueda de Datos y Análisis Estadístico Escolar
#### Establecimiento: Liceo TP Gonzalo Guglielmi M

---

## 1. Presentación y Enfoque Andragógico del Módulo

El **Módulo 4: Excel Intermedio** representa la culminación del programa formativo para los Asistentes de la Educación del **Liceo TP Gonzalo Guglielmi M**.

En este nivel avanzado, las y los participantes aprenden a transformar Excel en un **sistema de gestión inteligente**. Ya no se trata solo de registrar datos, sino de hacer que la planilla **tome decisiones automáticas** (evaluar si un alumno aprueba o reprueba, alertar inasistencias críticas, buscar la ficha de un apoderado con solo digitar el RUN y generar gráficos estadísticos para el Director y el Consejo Escolar en 3 clics).

### Principios Andragógicos Aplicados:
- **Automatización del criterio:** Se enseña la lógica condicional con analogías humanas ("Si el promedio es mayor o igual a 4.0, escribe Aprobado; si no, escribe Reprobado").
- **Prevención total del error:** Mediante listas desplegables y validación de celdas, se evita que alguien escriba un "8.5" o ingrese un curso con faltas de ortografía.
- **Visualización ejecutiva:** Con el semáforo de notas y las tablas dinámicas, la información salta a la vista sin tener que leer 500 filas una a una.

---

## 2. Objetivos de Aprendizaje

Al finalizar el **Módulo 4: Excel Intermedio**, las y los participantes serán capaces de:
1. **Construir expresiones lógicas con la Función SI** (`=SI(...)`), automatizando la asignación de estados académicos (Aprobado/Reprobado) y alertas de riesgo escolar por inasistencia (< 85%).
2. **Implementar funciones de búsqueda (`BUSCARV` y `BUSCARX`)**, creando fichas interactivas para consultar datos de apoderados, direcciones y teléfonos a partir del RUN del estudiante.
3. **Aplicar Validación de Datos con listas desplegables y restricciones numéricas**, asegurando que solo se ingresen cursos oficiales y notas válidas en la escala chilena (1.0 a 7.0).
4. **Configurar Formato Condicional visual**, destacando notas rojas (< 4.0) en fondo rojo suave y notas sobresalientes (>= 6.0) en verde de manera 100% automática.
5. **Generar Tablas Dinámicas y Gráficos Estadísticos interactivos**, resumiendo la matrícula, porcentaje de aprobación y retención por especialidad técnica profesional (*Electricidad, Mecánica, Administración*).
6. **Integrar y proteger planillas automatizadas de asistencia y calificaciones**, bloqueando celdas con fórmulas para evitar borrados accidentales.

---

## 3. Secuencia de Temas y Distribución de Tiempos

| Unidad / Tema | Contenidos Principales | Tiempo Estimado |
| :--- | :--- | :---: |
| **Tema 1** | Función lógica SI y alertas condicionales escolares | 30 min |
| **Tema 2** | Búsqueda automática de datos con BUSCARV y BUSCARX | 35 min |
| **Tema 3** | Validación de datos, listas desplegables y control de notas (1.0 a 7.0) | 20 min |
| **Tema 4** | Formato condicional (Semáforo de notas rojas y alertas de asistencia) | 20 min |
| **Tema 5** | Tablas dinámicas y gráficos interactivos para Consejo de Profesores | 30 min |
| **Tema 6** | Planilla integral automatizada y protección de fórmulas | 20 min |
| **Proyecto Integrador** | Sistema Automatizado de Gestión Académica y Asistencia | 30 min |
| **Evaluación y Cierre** | Rúbrica de evaluación y cuestionario de salida | 15 min |
| **Tiempo Total** | **Sesión integral Módulo 4** | **200 min (~3h 20m)** |

---

## 4. Desarrollo de Temas y Ejercicios Prácticos Guiados

---

### TEMA 1: La Función Lógica SI y Alertas Escolares Automáticas

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** La función SI es como el **criterio del inspector en la puerta del liceo**:
> - *"Si el estudiante trae su uniforme completo, déjalo pasar; si no lo trae, envíalo a inspectoría"*.
> - La fórmula en Excel tiene exactamente 3 partes separadas por punto y coma:
>   `=SI( ¿Pregunta lógica? ; "Qué poner si es VERDADERO" ; "Qué poner si es FALSO" )`
> - Ejemplo escolar: `=SI(F4>=4.0; "Aprobado"; "Reprobado")`. Si el promedio es 5.5, Excel escribe "Aprobado"; si el promedio es 3.8, escribe "Reprobado" al instante.

---

#### Ejercicio Guiado 1.1: Estado Académico Automático (Aprobado / Reprobado)
- **Situación escolar:** Secretaría académica debe asignar la situación final a una nómina de 45 estudiantes sin tener que revisar cada promedio a mano.
- **Paso a paso:**
  1. En una hoja nueva de Excel, escribe en la celda `E3` el encabezado `Promedio Final` y en `F3` `Situación Académica`.
  2. En `E4`, `E5` y `E6` escribe los promedios: `5.8`, `3.9` y `6.5`.
  3. Haz clic en la celda **F4**.
  4. Escribe exactamente la siguiente fórmula:
     `=SI(E4>=4.0; "Aprobado"; "Reprobado")`
  5. Presiona `Enter`. Verás que aparece `"Aprobado"`.
  6. Haz doble clic en el punto verde de autorrelleno en la esquina de F4 para copiar la fórmula hacia abajo.
- **Resultado esperado para autoevaluación:** La celda F5 (3.9) muestra `"Reprobado"` y la celda F6 (6.5) muestra `"Aprobado"` de forma 100% automática.

---

#### Ejercicio Guiado 1.2: Alerta de Inasistencia Crítica para Inspectoría General
- **Situación escolar:** La ley exige un mínimo de 85% de asistencia para promover de curso. Inspectoría necesita una alerta visual automática para citar a los apoderados en riesgo.
- **Paso a paso:**
  1. En la celda `G3`, escribe el encabezado: `% Asistencia`.
  2. En la celda `H3`, escribe el encabezado: `Alerta Asistencia`.
  3. En `G4`, `G5` y `G6` escribe los porcentajes: `92%`, `81%` y `85%`.
  4. En la celda **H4**, escribe la siguiente fórmula:
     `=SI(G4<85%; "CITAR APODERADO"; "Asistencia Regular")`
  5. Presiona `Enter` y copia hacia abajo con autorrelleno.
- **Resultado esperado para autoevaluación:** La celda H5 (81%) muestra `"CITAR APODERADO"` en mayúsculas, mientras que el 92% y 85% muestran `"Asistencia Regular"`.

---

### TEMA 2: Búsqueda Automática con BUSCARV y BUSCARX

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** `BUSCARV` es como el **asistente que busca en el archivador de matrículas por el RUN**:
> - Tú le dices: *"Búscame al alumno con RUN 22.123.456-7 en el archivador general y tráeme el teléfono de su apoderado"*.
> - La fórmula tiene 4 partes:
>   `=BUSCARV( Valor_Buscado ; Matriz_Tabla ; Indicador_Columnas ; FALSO )`
>   - **Valor Buscado:** La celda donde escribes el RUN.
>   - **Matriz Tabla:** Todo el rango donde están los alumnos (ej: `A4:F100`).
>   - **Indicador Columnas:** El número de la columna que quieres traer (1=RUN, 2=Nombre, 3=Curso, 4=Teléfono).
>   - **FALSO:** Significa "búsqueda exacta" (evita que traiga datos de otro alumno parecido).

---

#### Ejercicio Guiado 2.1: Ficha de Consulta Rápida de Apoderados por RUN
- **Situación escolar:** Portería e Inspectoría necesitan una mini pantalla de consulta donde escriban el RUN del alumno y aparezca al instante el Nombre y el Contacto del Apoderado.
- **Paso a paso:**
  1. Crea en la misma hoja (o en una hoja aparte) una base de datos de alumnos a partir de **A6**:
     - `A6: RUN` | `B6: Nombre Estudiante` | `C6: Curso` | `D6: Nombre Apoderado` | `E6: Teléfono`
     - Fila 7: `21.111.111-1` | `Matías Soto` | `1° TP Electricidad` | `Juana Pérez` | `+56911223344`
     - Fila 8: `22.222.222-2` | `Camila Díaz` | `2° TP Mecánica` | `Pedro Díaz` | `+56988776655`
  2. Arriba en la celda **B2**, diseña la casilla de búsqueda: escribe `21.111.111-1`.
  3. En la celda **B3** (para traer el Nombre del Alumno), escribe:
     `=BUSCARV(B2; A7:E8; 2; FALSO)`
  4. En la celda **B4** (para traer el Teléfono del Apoderado), escribe:
     `=BUSCARV(B2; A7:E8; 5; FALSO)`
  5. Ahora cambia el RUN en B2 por `22.222.222-2` y presiona Enter.
- **Resultado esperado para autoevaluación:** Al cambiar el RUN en B2, el nombre cambia instantáneamente a *"Camila Díaz"* y el teléfono a *"+56988776655"*.

---

#### Ejercicio Guiado 2.2: Búsqueda Segura con SI.ERROR y BUSCARX
- **Situación escolar:** Si se ingresa un RUN que no existe en el liceo, Excel muestra un error feo (`#N/D`). Se debe proteger para que muestre un mensaje amable como *"Alumno No Encontrado"*.
- **Paso a paso:**
  1. Modifica la fórmula de la celda **B3** envolviéndola con `SI.ERROR`:
     `=SI.ERROR(BUSCARV(B2; A7:E8; 2; FALSO); "RUN No Registrado en el Liceo")`
  2. En la celda B2 escribe un RUN inventado: `99.999.999-9`.
  3. *(Alternativa moderna en Excel 2019/365 con BUSCARX)*:
     En la celda B4 escribe:
     `=BUSCARX(B2; A7:A8; D7:D8; "Apoderado No Encontrado")`
- **Resultado esperado para autoevaluación:** En vez de un error críptico, la casilla muestra limpiamente el texto `"RUN No Registrado en el Liceo"`.

---

### TEMA 3: Validación de Datos (Listas Desplegables y Control de Notas)

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** La validación de datos es como **un torniquete de seguridad en la entrada de la celda**:
> - En vez de dejar que cada persona escriba "1A", "Primero A" o "1° Medio A" (lo que desordena las estadísticas), le ponemos una **flechita desplegable** con los cursos oficiales del Liceo TP Gonzalo Guglielmi M.
> - Si un docente intenta ingresar una nota `"8.0"` o un número negativo por error, Excel detiene la acción y avisa: *"Error: Las notas en Chile solo van de 1.0 a 7.0"*.

---

#### Ejercicio Guiado 3.1: Crear Lista Desplegable de Cursos y Especialidades TP
- **Situación escolar:** Secretaría debe registrar la matrícula de alumnos asegurando que la especialidad técnica esté estandarizada.
- **Paso a paso:**
  1. Selecciona el rango de celdas donde se ingresará el curso (ej: **C4:C20**).
  2. Dirígete a la pestaña **Datos** en la Cinta de Opciones.
  3. En el grupo *Herramientas de datos*, haz clic en **Validación de datos**.
  4. En la pestaña *Configuración*, en la casilla **Permitir:**, cambia *Cualquier valor* por **Lista**.
  5. En la casilla **Origen:**, escribe exactamente lo siguiente:
     `1° Medio A; 2° Medio B; 3° Medio TP Electricidad; 3° Medio TP Mecánica; 4° Medio TP Administración`
  6. Haz clic en **Aceptar**.
  7. Haz clic en la celda **C4**: verás aparecer una flecha lateral.
- **Resultado esperado para autoevaluación:** La celda despliega las 5 opciones oficiales y no permite escribir ningún texto fuera de la lista.

---

#### Ejercicio Guiado 3.2: Restricción de Calificaciones de 1.0 a 7.0 con Mensaje de Error
- **Situación escolar:** Evitar errores de digitación en las columnas de notas.
- **Paso a paso:**
  1. Selecciona las columnas de notas (ej: **D4:F20**).
  2. Ve a **Datos > Validación de datos**.
  3. En *Permitir:*, elige **Decimal**.
  4. En *Datos:*, elige **entre**.
  5. En *Mínimo:* escribe `1.0` y en *Máximo:* escribe `7.0`.
  6. Pasa a la pestaña **Mensaje de error**:
     - *Título:* `Nota Fuera de Rango`
     - *Mensaje:* `Ingrese una calificación válida en la escala chilena de 1.0 a 7.0.`
  7. Haz clic en **Aceptar**. Prueba escribir un `8.5` en la celda D4.
- **Resultado esperado para autoevaluación:** Excel bloquea el ingreso erróneo y muestra tu ventana de advertencia personalizada.

---

### TEMA 4: Formato Condicional (Semáforo de Notas y Alertas Visuales)

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** El formato condicional es como **un destacador fluorescente automático**:
> - En vez de revisar 40 notas una por una para pintar de rojo las que están bajo 4.0, Excel vigila la planilla 24/7.
> - Si un promedio baja de 4.0, la celda se tiñe de rojo suave de inmediato. Si el alumno rinde una prueba recuperativa y sube a 5.0, el color rojo desaparece solo.

---

#### Ejercicio Guiado 4.1: Semáforo Automático de Notas Rojas (< 4.0) y Sobresalientes (>= 6.0)
- **Situación escolar:** UTP solicita que todas las notas insuficientes del liceo resalten visualmente a primera vista.
- **Paso a paso:**
  1. Selecciona todo el rango de notas y promedios (ej: **D4:G20**).
  2. En la pestaña **Inicio** (grupo *Estilos*), haz clic en **Formato condicional**.
  3. Posa el cursor sobre **Reglas para resaltar celdas** y selecciona **Es menor que...**
  4. En la casilla escribe `4.0` y en el menú de la derecha selecciona **Relleno rojo claro con texto rojo oscuro**. Haz clic en *Aceptar*.
  5. Con el mismo rango seleccionado, vuelve a *Formato condicional > Reglas para resaltar celdas >* **Es mayor o igual que...**
  6. Escribe `6.0` y en la derecha elige **Relleno verde claro con texto verde oscuro**. Haz clic en *Aceptar*.
- **Resultado esperado para autoevaluación:** Las notas como 3.5 o 3.8 se pintan de rojo automáticamente y las notas 6.2 o 7.0 se pintan de verde.

---

#### Ejercicio Guiado 4.2: Barras de Datos para Porcentaje de Asistencia
- **Situación escolar:** Inspectoría quiere ver una barra gráfica dentro de la celda que muestre qué tan lleno está el porcentaje de asistencia de cada alumno.
- **Paso a paso:**
  1. Selecciona la columna de asistencia (ej: **H4:H20**).
  2. Ve a **Inicio > Formato condicional > Barras de datos**.
  3. Elige un relleno degradado de color verde o azul.
- **Resultado esperado para autoevaluación:** Cada celda muestra una barra horizontal proporcional al porcentaje (una asistencia de 95% llena casi toda la celda, mientras que un 50% llena solo la mitad).

---

### TEMA 5: Tablas Dinámicas y Gráficos Estadísticos Escolares

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Una tabla dinámica es como **un robot clasificador de informes para el Consejo de Profesores**:
> - Tienes una planilla con 300 estudiantes de todas las especialidades técnicas y el Director te pide: *"Dime cuántos alumnos aprobados y reprobados tenemos en cada carrera y cuál es el promedio general por especialidad"*.
> - Hacer eso a mano toma 2 horas; con una **Tabla Dinámica**, arrastras dos casillas con el mouse y el informe completo aparece en 5 segundos.

---

#### Ejercicio Guiado 5.1: Crear Tabla Dinámica de Rendimiento por Especialidad TP
- **Situación escolar:** Generar el informe de resultados académicos del primer semestre para la Dirección del Liceo TP Gonzalo Guglielmi M.
- **Paso a paso:**
  1. Haz clic en cualquier celda dentro de tu tabla general de estudiantes (que contenga columnas de: *Estudiante, Curso, Especialidad TP, Promedio Final, Situación*).
  2. Ve a la pestaña **Insertar** y haz clic en el primer botón: **Tabla dinámica**.
  3. En la ventana que aparece, verifica que esté marcada la opción *Nueva hoja de cálculo* y haz clic en **Aceptar**.
  4. En el panel derecho llamado *Campos de tabla dinámica*, realiza lo siguiente con el mouse:
     - Arrastra el campo **Especialidad TP** al cuadrante de **Filas**.
     - Arrastra el campo **Situación** al cuadrante de **Columnas**.
     - Arrastra el campo **RUN** (o *Estudiante*) al cuadrante de **Valores** (debe decir *Cuenta de RUN*).
     - Arrastra el campo **Promedio Final** también al cuadrante de **Valores**, haz clic sobre él > *Configuración de campo de valor* y cámbialo de *Suma* a **Promedio**.
- **Resultado esperado para autoevaluación:** Una tabla resumen perfecta que muestra exactamente cuántos alumnos aprobaron y reprobaron por cada carrera técnica (*Electricidad, Mecánica, etc.*) con el promedio exacto de cada especialidad.

---

#### Ejercicio Guiado 5.2: Generar Gráfico Dinámico para el Consejo Escolar
- **Situación escolar:** Presentar los resultados en un gráfico de barras claro para proyectar en la reunión docente.
- **Paso a paso:**
  1. Con un clic sobre la Tabla Dinámica recién creada, dirígete a la pestaña superior **Análisis de tabla dinámica** (o *Insertar*).
  2. Haz clic en el botón **Gráfico dinámico**.
  3. Selecciona **Columnas agrupadas** y haz clic en **Aceptar**.
  4. Haz clic en el signo **[+]** verde junto al gráfico y marca la casilla **Etiquetas de datos** para que los números se vean encima de las barras.
  5. Cambia el título del gráfico a: `Rendimiento Académico por Especialidad TP 2026`.
- **Resultado esperado para autoevaluación:** Un gráfico visual interactivo que se actualiza solo si cambian los datos de la planilla principal.

---

### TEMA 6: Integración de Planillas y Protección de Celdas

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Proteger celdas es como **ponerle candado a las fórmulas para que nadie las borre por error**:
> - En la secretaría o sala de profesores, varios funcionarios ingresan notas.
> - Si un docente escribe un número sobre la celda del promedio, borra la fórmula `=PROMEDIO(...)` y la planilla se descalibra.
> - Dejamos **abiertas** las celdas de las notas para que escriban y **bloqueadas con candado** las celdas con fórmulas y títulos.

---

#### Ejercicio Guiado 6.1: Desbloquear Celdas de Entrada de Notas
- **Situación escolar:** Preparar la planilla para que los profesores solo puedan ingresar notas en las celdas autorizadas.
- **Paso a paso:**
  1. Selecciona **ÚNICAMENTE** las celdas donde se deben ingresar notas (ej: **D4:F20**).
  2. Haz clic derecho sobre la selección y elige **Formato de celdas**.
  3. Ve a la última pestaña de la derecha: **Proteger**.
  4. **Desmarca** la casilla que dice **Bloqueada** y haz clic en *Aceptar*. (Esto le quita el candado solo a esas celdas).
- **Resultado esperado para autoevaluación:** Las celdas de notas quedan habilitadas para edición libre.

---

#### Ejercicio Guiado 6.2: Activar la Protección de la Hoja con Contraseña
- **Situación escolar:** Bloquear el resto de la planilla para proteger el membrete y las fórmulas.
- **Paso a paso:**
  1. Ve a la pestaña **Revisar** en la Cinta de Opciones.
  2. Haz clic en el botón **Proteger hoja**.
  3. En la ventana, puedes ingresar una contraseña fácil de recordar (ej: `Liceo2026`) o dejarla en blanco y hacer clic en **Aceptar**.
  4. Intenta hacer doble clic sobre la celda del Promedio o sobre el título del liceo: Excel mostrará un mensaje avisando que la celda está protegida.
  5. Intenta escribir una nota en D4: verás que te permite escribir sin ningún problema.
- **Resultado esperado para autoevaluación:** Planilla blindada contra errores involuntarios del equipo escolar.

---

## 5. Actividad Integradora Final del Módulo

### Nombre del Proyecto: "Sistema Automatizado de Gestión Académica y Asistencia del Liceo TP Gonzalo Guglielmi M"
**Contexto Escolar:** La Dirección y el Equipo Directivo te encomiendan construir la planilla maestra definitiva para el cierre del año escolar. La planilla debe validar datos, calcular promedios, emitir alertas de asistencia, clasificar aprobados/reprobados con semáforo de colores, permitir consultas por RUN y resumir los resultados en una tabla dinámica.

### Instrucciones Paso a Paso para los Participantes:
1. **Hoja 1: `Registro_Academico_2026`:**
   - **Validación de Cursos:** Aplicar lista desplegable con las especialidades TP (*3° Medio TP Electricidad, 3° Medio TP Mecánica, 4° Medio TP Administración*).
   - **Validación de Notas:** Restringir columnas de notas a valores decimales entre 1.0 y 7.0.
   - **Fórmulas y Lógica:**
     - Calcular `Promedio Final` con `=PROMEDIO(...)`.
     - Asignar `Situación Final` con `=SI(Promedio>=4.0; "Aprobado"; "Reprobado")`.
     - Asignar `Alerta Asistencia` con `=SI(Asistencia<85%; "Riesgo Inasistencia"; "Regular")`.
   - **Semáforo Condicional:** Notas < 4.0 en rojo claro y notas >= 6.0 en verde claro.
2. **Hoja 2: `Consulta_Apoderados` (Buscador con BUSCARV):**
   - Diseñar una tarjeta de consulta donde al ingresar el RUN del estudiante en una celda, Excel devuelva automáticamente el **Nombre del Estudiante**, **Especialidad TP**, **Nombre del Apoderado** y **Teléfono de Emergencia** mediante la fórmula `=BUSCARV(...)` con protección `=SI.ERROR(...)`.
3. **Hoja 3: `Estadisticas_Direccion` (Tabla y Gráfico Dinámico):**
   - Insertar una **Tabla Dinámica** que totalice alumnos Aprobados y Reprobados por Especialidad TP con el promedio general.
   - Insertar un **Gráfico de Columnas Agrupadas** con etiquetas de datos visible.
4. **Protección y Guardado:**
   - Proteger la hoja de calificaciones dejando editables solo las celdas de notas.
   - Guardar el archivo como: `Sistema_Gestion_Guglielmi_[TuNombre].xlsx`.

---

## 6. Pauta de Evaluación del Proyecto Integrador

**Puntaje Total:** 100 Puntos | **Exigencia:** 60% (60 puntos para aprobación)

| Criterio de Evaluación | Indicadores de Logro Observables | Puntaje Máximo |
| :--- | :--- | :---: |
| **1. Lógica Condicional (Función SI)** | • Aplica correctamente la función SI para Aprobados/Reprobados.<br>• Configura alerta lógica para asistencia menor a 85%. | **25 pts** |
| **2. Búsqueda de Datos (BUSCARV/BUSCARX)** | • Construye buscador de apoderados por RUN con coincidencia exacta (FALSO).<br>• Maneja errores con SI.ERROR. | **20 pts** |
| **3. Validación de Datos** | • Crea lista desplegable con especialidades TP.<br>• Restringe notas entre 1.0 y 7.0 con mensaje de error personalizado. | **15 pts** |
| **4. Formato Condicional (Semáforo)** | • Aplica reglas automáticas de colores para notas rojas (<4.0) y verdes (>=6.0). | **15 pts** |
| **5. Tablas Dinámicas y Gráficos** | • Genera tabla dinámica resumen por especialidad TP y gráfico con etiquetas. | **15 pts** |
| **6. Protección y Seguridad** | • Desbloquea celdas de entrada y protege la hoja contra borrado de fórmulas. | **10 pts** |
| **TOTAL** | **Evaluación Integral de Competencias Excel Intermedio** | **100 pts** |

---

## 7. Cuestionario de Cierre del Módulo (7 Preguntas)

#### 1. En la fórmula `=SI(E4>=4.0; "Aprobado"; "Reprobado")`, ¿qué valor colocará Excel en la celda si el promedio en E4 es exactamente 3.9?
- a) "Aprobado"
- b) "Reprobado" *(Correcta)*
- c) Un error `#¡VALOR!`
- d) Cero
> **Retroalimentación pedagógica:** Al no cumplirse la condición lógica (3.9 no es mayor ni igual a 4.0), la función salta al tercer argumento (FALSO), escribiendo "Reprobado".

#### 2. En la función `=BUSCARV(B2; A4:E100; 3; FALSO)`, ¿qué significa el número 3?
- a) Que busca en la fila 3.
- b) Que repite la búsqueda 3 veces.
- c) Que devolverá el dato ubicado en la tercera columna de la tabla seleccionada. *(Correcta)*
- d) Que suma 3 puntos a la nota.
> **Retroalimentación pedagógica:** El tercer argumento es el índice de columna que se desea extraer de la matriz de datos.

#### 3. ¿Por qué es fundamental colocar el argumento `FALSO` al final de una fórmula `BUSCARV` cuando buscamos el RUN de un estudiante?
- a) Porque la fórmula está mala.
- b) Porque exige una coincidencia 100% exacta del RUN y evita traer datos de otro alumno. *(Correcta)*
- c) Para que no cobre dinero.
- d) Para que convierta el texto a mayúsculas.
> **Retroalimentación pedagógica:** `FALSO` (o 0) garantiza una búsqueda exacta, indispensable para identificadores únicos como el RUN.

#### 4. Si deseas que los asistentes solo puedan seleccionar entre "1° Medio A", "2° Medio B" o "3° Medio TP" en una celda sin cometer errores de escritura, ¿qué herramienta debes usar?
- a) Formato condicional
- b) Validación de datos con opción "Lista" *(Correcta)*
- c) Inmovilizar paneles
- d) Filtro avanzado
> **Retroalimentación pedagógica:** La Validación de Datos tipo Lista genera una flecha desplegable que restringe las opciones a las autorizadas.

#### 5. ¿Cómo se logra que todas las notas inferiores a 4.0 se destaquen automáticamente en color rojo sin tener que pintarlas a mano?
- a) Cambiando el tipo de letra a Arial Black.
- b) Con Formato Condicional > Reglas para resaltar celdas > Es menor que 4.0. *(Correcta)*
- c) Borrando las celdas.
- d) Imprimiendo en blanco y negro.
> **Retroalimentación pedagógica:** El Formato Condicional evalúa automáticamente el valor de la celda y aplica el color configurado.

#### 6. ¿Cuál es la principal ventaja de una Tabla Dinámica al analizar una nómina de 300 estudiantes del Liceo TP Gonzalo Guglielmi M?
- a) Que dibuja marcos de colores.
- b) Que permite resumir, agrupar y totalizar datos masivos por curso o especialidad en pocos segundos sin escribir fórmulas manuales. *(Correcta)*
- c) Que borra los alumnos reprobados.
- d) Que apaga el computador automáticamente.
> **Retroalimentación pedagógica:** Las Tablas Dinámicas son la herramienta más potente de Excel para cruzar variables y generar informes ejecutivos inmediatos.

#### 7. Para proteger una planilla de manera que los profesores solo puedan ingresar notas pero no puedan borrar las fórmulas de los promedios, ¿cuál es el procedimiento correcto?
- a) Bloquear todo el computador con clave de Windows.
- b) Desmarcar la casilla "Bloqueada" en las celdas de notas y luego activar "Proteger hoja" en la pestaña Revisar. *(Correcta)*
- c) Borrar las fórmulas antes de entregar la planilla.
- d) Guardar el archivo como PDF.
> **Retroalimentación pedagógica:** Al desmarcar "Bloqueada" en las celdas de entrada y luego proteger la hoja, el candado actúa únicamente sobre las fórmulas y títulos.

---

## 8. Materiales Visuales y Recursos Disponibles

1. **Hoja de Referencia Rápida Excel Intermedio:** [`guia_rapida_atajos_excel_intermedio.html`](file:///C:/Users/Cristian/Desktop/Curso_Office_Asistentes_Educacion/Modulo4_Excel_Intermedio/guia_rapida_atajos_excel_intermedio.html)
2. **Infografía Visual del Módulo 4:** [`infografia_excel_intermedio.html`](file:///C:/Users/Cristian/Desktop/Curso_Office_Asistentes_Educacion/Modulo4_Excel_Intermedio/infografia_excel_intermedio.html)
