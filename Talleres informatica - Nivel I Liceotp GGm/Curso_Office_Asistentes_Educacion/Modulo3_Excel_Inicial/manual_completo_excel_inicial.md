# Manual del Docente y Guía del Participante
## Curso: Microsoft Office 2019 Aplicado a la Gestión Escolar
### Módulo 3: Excel Inicial – Planillas, Fórmulas Básicas y Gestión de Registros Escolares
#### Establecimiento: Liceo TP Gonzalo Guglielmi M

---

## 1. Presentación y Enfoque Andragógico del Módulo

El **Módulo 3: Excel Inicial** está especialmente diseñado para los **Asistentes de la Educación** del **Liceo TP Gonzalo Guglielmi M** (inspectores generales y de nivel, secretarias, administrativos, encargados de inventario CRA, coordinadores de talleres TP y personal de apoyo escolar).

Sabemos que muchas personas adultas sienten cierta aprensión inicial hacia las hojas de cálculo por asociarlas a matemáticas complejas. Por ello, este módulo aborda Excel no como un programa de cálculo abstracto, sino como un **asistente digital infalible que calcula promedios solo, ordena listas por abecedario al instante y evita sumar con calculadora a mano**.

### Metodología para Adultos:
- **Cero miedo a la cuadrícula:** Se explica la estructura de filas y columnas con la analogía del casillero escolar o el plano de salas del liceo.
- **Fórmulas prácticas sin enredos:** Nos enfocamos en las 5 fórmulas reales que todo asistente necesita en su jornada escolar (`SUMA`, `PROMEDIO`, `MAX`, `MIN` y `CONTAR`).
- **Autonomía en la fotocopiadora:** Se enseña el truco definitivo para que una planilla nunca más salga cortada por la mitad al imprimir.

---

## 2. Objetivos de Aprendizaje

Al finalizar el **Módulo 3: Excel Inicial**, las y los participantes serán capaces de:
1. **Navegar e interactuar con la interfaz de Excel 2019**, reconociendo filas, columnas, rangos de celdas, la barra de fórmulas (`fx`) y la gestión de múltiples hojas por curso.
2. **Identificar y aplicar los tipos de datos correctos** (texto, números, fechas y moneda), formateando notas escolares chilenas (escala 1.0 a 7.0 con 1 decimal).
3. **Construir fórmulas básicas esenciales** (`=SUMA`, `=PROMEDIO`, `=MAX`, `=MIN`, `=CONTAR`), comprendiendo la sintaxis del signo igual (`=`), los paréntesis y el operador de rango (`:`).
4. **Dar formato institucional y estético a tablas escolares**, aplicando bordes, sombreados, ajuste de texto y combinación de celdas.
5. **Ordenar datos alfabéticamente y aplicar filtros automáticos** para consultar rápidamente listas de estudiantes prioritarios, atrasos o estados de matrícula.
6. **Inmovilizar paneles (filas y columnas)** para mantener a la vista los nombres y encabezados al desplazarse por nóminas extensas.
7. **Configurar la impresión profesional de planillas**, escalando la vista para que quepa en 1 página de ancho y repitiendo encabezados en hojas múltiples.

---

## 3. Secuencia de Temas y Distribución de Tiempos

| Unidad / Tema | Contenidos Principales | Tiempo Estimado |
| :--- | :--- | :---: |
| **Tema 1** | Entorno de Excel, coordenadas de celda y gestión de hojas | 20 min |
| **Tema 2** | Tipos de datos (Texto, Número, Fecha) y formato de notas con 1 decimal | 20 min |
| **Tema 3** | Las 5 fórmulas esenciales escolares (SUMA, PROMEDIO, MAX, MIN, CONTAR) | 35 min |
| **Tema 4** | Formato de celdas, bordes y estilos de tabla institucional | 20 min |
| **Tema 5** | Ordenar por apellido y filtrar por cursos / estados | 25 min |
| **Tema 6** | Inmovilizar paneles en listas largas de estudiantes | 15 min |
| **Tema 7** | Configuración de página e impresión económica (Ajustar a 1 página) | 20 min |
| **Proyecto Integrador** | Planilla Maestra de Asistencia, Notas y Estadísticas | 30 min |
| **Evaluación y Cierre** | Rúbrica analítica y cuestionario de salida | 15 min |
| **Tiempo Total** | **Sesión integral Módulo 3** | **200 min (~3h 20m)** |

---

## 4. Desarrollo de Temas y Ejercicios Prácticos Guiados

---

### TEMA 1: Entorno de Excel, Celdas y Gestión de Hojas

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Una hoja de Excel es como el **casillero de llaves o el panel de casilleros de los profesores en la sala de docentes del Liceo TP Gonzalo Guglielmi M**.
> - Cada **Columna** tiene una letra arriba (**A, B, C...** como los pasillos del liceo).
> - Cada **Fila** tiene un número al costado izquierdo (**1, 2, 3...** como los pisos del edificio).
> - La **Celda** es la cajita donde se cruzan la letra y el número: por ejemplo, la celda **B4** es la columna B en la fila 4.
> - La **Barra de Fórmulas (`fx`)** arriba es la "ventana de rayos X" que te muestra qué hay realmente dentro de la celda (el número escrito o la fórmula oculta).
> - Las **Pestañas de Hoja** (abajo) son como las distintas páginas del libro de clases (Hoja 1: *1° Medio A*, Hoja 2: *2° Medio TP*).

---

#### Ejercicio Guiado 1.1: Navegación y Coordenadas en Inventario del CRA
- **Situación escolar:** El encargado del CRA necesita ubicar rápidamente celdas específicas en una planilla de control de proyectores y notebooks.
- **Paso a paso:**
  1. Abre Microsoft Excel 2019 y haz clic en **Libro en blanco**.
  2. Haz clic en la celda **A1** y escribe: `LICEO TP GONZALO GUGLIELMI M - INVENTARIO CRA`.
  3. Haz clic en la celda **B3** y escribe: `Equipo`.
  4. Haz clic en la celda **C3** y escribe: `Cantidad`.
  5. En el extremo superior izquierdo (arriba de la columna A), observa el **Cuadro de Nombres**: verás que siempre indica la celda en la que estás parado.
  6. Haz clic dentro del Cuadro de Nombres, escribe `E15` y presiona `Enter`. Nota cómo Excel salta de inmediato a esa celda lejana.
  7. Presiona el atajo **Ctrl + Inicio** para volver instantáneamente a la celda **A1**.
- **Resultado esperado para autoevaluación:** Reconocimiento fluido de las coordenadas de celda y regreso rápido al inicio de la planilla.

---

#### Ejercicio Guiado 1.2: Gestión de Hojas por Cursos del Establecimiento
- **Situación escolar:** Organizar un solo archivo de Excel que contenga la información separada para cada curso del liceo.
- **Paso a paso:**
  1. En la parte inferior izquierda de la pantalla, busca la pestaña llamada `Hoja1`.
  2. Haz **doble clic rápido** sobre la palabra `Hoja1` (o clic derecho > *Cambiar nombre*).
  3. Escribe: `1° Medio A` y presiona `Enter`.
  4. Haz clic en el icono de **[+]** (círculo con signo más) junto a la pestaña para agregar una hoja nueva.
  5. Renombra esta segunda hoja como: `2° Medio TP Electricidad`.
  6. Haz clic derecho sobre la pestaña `1° Medio A` > **Color de pestaña** y selecciona un color verde institucional.
- **Resultado esperado para autoevaluación:** El libro tiene 2 hojas rotuladas con nombres de cursos reales y pestañas identificadas con color.

---

### TEMA 2: Tipos de Datos y Formato de Notas (Decimales en Chile)

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Excel clasifica lo que escribes en cajones distintos:
> - **Texto:** Nombres de alumnos o asignaturas (Excel los alinea automáticamente a la **izquierda**).
> - **Números:** Cantidades, notas o edades (Excel los alinea automáticamente a la **derecha**).
> - **¡Alerta en Chile con las notas!** En Chile usamos la coma o el punto según la configuración del teclado. Si escribes un 5,5 y queda a la izquierda, Excel cree que es una palabra y NO lo promediará. Si queda a la derecha, ¡es un número válido!
> - Con el botón **Aumentar/Disminuir decimales**, obligamos a Excel a mostrar las notas con 1 decimal exacto (ej: `6.0` en vez de `6`).

---

#### Ejercicio Guiado 2.1: Ingreso de Datos de Estudiantes y Formateo de RUT y Fechas
- **Situación escolar:** Secretaría debe ingresar una nómina con nombres, RUT, fechas de matrícula y aportes del Centro de Padres.
- **Paso a paso:**
  1. En la hoja `1° Medio A`, escribe los siguientes encabezados en la fila 3:
     - `A3`: `N°` | `B3`: `Estudiante` | `C3`: `RUN` | `D3`: `Fecha Matrícula` | `E3`: `Cuota Centro Padres`.
  2. En la fila 4 ingresa los datos:
     - `A4`: `1`
     - `B4`: `Aravena Soto, Matías`
     - `C4`: `22.456.789-K`
     - `D4`: `03/03/2026`
     - `E4`: `15000`
  3. Selecciona la celda **E4** (15000).
  4. En la pestaña **Inicio** (grupo *Número*), haz clic en el icono de moneda o en la lista desplegable elige **Moneda** (o *Contabilidad*).
  5. Observa cómo cambia automáticamente a `$ 15.000`.
- **Resultado esperado para autoevaluación:** El monto se visualiza con signo de peso y separador de miles sin haber tenido que escribir los signos a mano.

---

#### Ejercicio Guiado 2.2: Formato de Notas Escolares con 1 Decimal Exacto
- **Situación escolar:** Un paradocente transcribe las notas de una evaluación. Cuando un alumno saca un 7, Excel muestra solo un "7", pero el formato del libro de clases exige "7.0".
- **Paso a paso:**
  1. En la columna `F3`, escribe como encabezado: `Nota 1`.
  2. En las celdas `F4`, `F5` y `F6` ingresa las siguientes notas: `6.5`, `7` y `4.8`.
  3. Selecciona el rango de notas (**F4:F6**).
  4. En la pestaña **Inicio** (grupo *Número*), busca los dos botones con ceros y flechitas: **Aumentar decimales** y **Disminuir decimales**.
  5. Haz clic en *Aumentar decimales* hasta que todas las notas muestren exactamente 1 decimal.
- **Resultado esperado para autoevaluación:** La nota 7 se visualiza como `7.0` y todas las cifras quedan perfectamente alineadas por la coma decimal.

---

### TEMA 3: Las 5 Fórmulas Esenciales Escolares (SUMA, PROMEDIO, MAX, MIN, CONTAR)

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Las fórmulas de Excel son como tener una **calculadora con memoria que nunca se cansa ni se equivoca**.
> - **El secreto de los dos puntos (:):** Si escribes `D4:G4`, los dos puntos significan **"DESDE la celda D4 HASTA la celda G4"** (toma todo el grupo de notas de corrido).
> - **El punto y coma (;):** Significa **"Y TAMBIÉN"** (toma celdas sueltas, ej: `D4; F4`).
> - **`=SUMA(rango)`:** Suma todo el dinero, asistencia o horas de turno.
> - **`=PROMEDIO(rango)`:** Suma las notas y las divide automáticamente por la cantidad de evaluaciones.
> - **`=MAX(rango)` y `=MIN(rango)`:** Encuentran al instante la nota más alta y más baja del curso.
> - **`=CONTAR(rango)`:** Cuenta cuántos estudiantes rindieron la prueba.

---

#### Ejercicio Guiado 3.1: Cálculo del Promedio de Notas de Estudiantes
- **Situación escolar:** Calcular el promedio semestral de 3 notas para los estudiantes del Liceo TP Gonzalo Guglielmi M.
- **Paso a paso:**
  1. Construye la siguiente tabla pequeña a partir de la celda **A3**:
     ```text
     N°  | Estudiante              | Nota 1 | Nota 2 | Nota 3 | Promedio Final
     1   | Bravo Castro, Sofía     | 6.5    | 5.8    | 6.2    | 
     2   | Carrasco Díaz, Lucas    | 4.5    | 5.0    | 5.5    | 
     3   | Donoso Silva, Valentina | 7.0    | 6.8    | 6.9    | 
     ```
  2. Haz clic en la celda **F4** (debajo de *Promedio Final* para Sofía Bravo).
  3. Escribe exactamente: `=PROMEDIO(C4:E4)` y presiona `Enter`.
  4. Observa el resultado: Excel calcula automáticamente `6.2`.
  5. Haz un solo clic en la celda **F4**. Observa el pequeño punto verde en la esquina inferior derecha de la celda (el *cuadradito de autorrelleno*).
  6. Haz **doble clic rápido** sobre ese punto verde (o arrástralo hacia abajo hasta la fila 6).
- **Resultado esperado para autoevaluación:** Los promedios de Lucas Carrasco (5.0) y Valentina Donoso (6.9) se calculan solos en un instante sin tener que volver a escribir la fórmula.

---

#### Ejercicio Guiado 3.2: Estadísticas del Curso (Nota Máxima, Mínima y Total Evaluados)
- **Situación escolar:** UTP solicita al asistente un informe con la nota más alta, la más baja y la cantidad de alumnos evaluados.
- **Paso a paso:**
  1. Debajo de la tabla anterior, escribe en la columna B:
     - Celda `B8`: `Promedio General del Curso:`
     - Celda `B9`: `Nota Más Alta (Máxima):`
     - Celda `B10`: `Nota Más Baja (Mínima):`
     - Celda `B11`: `Total Alumnos Evaluados:`
  2. En la celda `C8`, escribe: `=PROMEDIO(F4:F6)` y presiona `Enter`.
  3. En la celda `C9`, escribe: `=MAX(F4:F6)` y presiona `Enter`.
  4. En la celda `C10`, escribe: `=MIN(F4:F6)` y presiona `Enter`.
  5. En la celda `C11`, escribe: `=CONTAR(F4:F6)` y presiona `Enter`.
- **Resultado esperado para autoevaluación:**
  - Promedio General: `6.0`
  - Nota Más Alta: `6.9`
  - Nota Más Baja: `5.0`
  - Total Evaluados: `3`

---

### TEMA 4: Formato de Celdas, Bordes y Estilo Institucional

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Una planilla sin bordes ni colores es como **un montón de números flotando en el aire**: cuesta saber a qué fila corresponde cada dato.
> - **Bordes:** Dibujan la cuadrícula nítida para que al imprimir en papel no salga una hoja blanca lisa.
> - **Combinar y Centrar:** Une varias casillas en una sola grande, ideal para colocar el título del liceo a lo ancho de toda la planilla.
> - **Ajustar Texto:** Hace que los títulos largos (ej: "Porcentaje Asistencia Anual") quepan en dos renglones dentro de la misma celda sin tener que ensanchar la columna al infinito.

---

#### Ejercicio Guiado 4.1: Diseño Profesional del Encabezado Institucional
- **Situación escolar:** Presentar el encabezado formal del Liceo TP Gonzalo Guglielmi M en la parte superior de la planilla.
- **Paso a paso:**
  1. En las celdas **A1:F1**, escribe: `LICEO TP GONZALO GUGLIELMI M • CONTROL DE CALIFICACIONES 2026`.
  2. Selecciona con el mouse desde la celda **A1 hasta la F1**.
  3. En la pestaña **Inicio** (grupo *Alineación*), haz clic en el botón **Combinar y centrar**.
  4. Aplica tamaño **14**, fuente **Arial** (o Calibri), **Negrita**, color de relleno **Verde Oscuro** y color de letra **Blanco**.
  5. En la fila 2 (A2:F2), combina y centra con el texto: `Subsector: Formación Técnica Profesional • Profesor(a) / Inspector(a) a Cargo`.
- **Resultado esperado para autoevaluación:** Un encabezado de dos niveles limpio, centrado e institucional que abarca exactamente el ancho de la tabla.

---

#### Ejercicio Guiado 4.2: Aplicación de Bordes y Ajuste de Texto
- **Situación escolar:** Delimitar las casillas de notas y hacer que los nombres de columnas largas queden legibles.
- **Paso a paso:**
  1. Selecciona toda tu tabla de datos y notas (desde **A3 hasta F6**).
  2. En la pestaña **Inicio** (grupo *Fuente*), haz clic en la flechita junto al botón de **Bordes** (icono de ventana cuadrada) y selecciona **Todos los bordes**.
  3. Selecciona la fila de encabezados (A3:F3), ponla en **Negrita**, con relleno gris claro y alineación **Centrada vertical y horizontalmente**.
  4. Haz clic en la celda **F3** ("Promedio Final") y presiona el botón **Ajustar texto** (en el grupo *Alineación*).
- **Resultado esperado para autoevaluación:** Cuadrícula con líneas nítidas y encabezados con presentación formal.

---

### TEMA 5: Ordenar por Apellido y Filtrar Registros Escolares

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Los filtros son como **un colador inteligente en secretaría o inspectoría**.
> - Tienes una lista de 200 estudiantes de todo el liceo y necesitas ver **SOLO** los de *1° Medio B* que tienen *Asistencia menor al 85%*.
> - Con los **Filtros**, haces clic en la flechita y Excel esconde temporalmente al resto de los alumnos sin borrar ningún dato.
> - **Ordenar de A a Z:** Ordena automáticamente a todo el curso por apellido paterno en 1 segundo, manteniendo a cada estudiante unido a sus propias notas.

---

#### Ejercicio Guiado 5.1: Ordenamiento Alfabético Seguro del Curso
- **Situación escolar:** Llegaron 5 alumnos nuevos matriculados fuera de plazo y quedaron al final de la lista. Necesitas ordenar todo el curso por apellido paterno sin desordenar las notas.
- **Paso a paso:**
  1. Asegúrate de tener una lista con nombres y notas.
  2. Haz un solo clic sobre cualquier celda de la columna de nombres (por ejemplo en `B4`).
  3. Ve a la pestaña **Datos** y haz clic en el botón **Ordenar de A a Z** (icono con letras A/Z y flecha hacia abajo).
  4. Observa cómo Excel reordena toda la tabla alfabéticamente, moviendo las filas completas con sus respectivas notas.
  5. Para renumerar la columna `N°` del 1 al 3: escribe `1` en A4, `2` en A5, selecciona ambos y haz doble clic en el punto de autorrelleno.
- **Resultado esperado para autoevaluación:** Lista ordenada de la A a la Z con numeración correlativa perfecta del 1 al final.

---

#### Ejercicio Guiado 5.2: Activación y Uso de Filtros por Estado de Matrícula
- **Situación escolar:** Inspectoría necesita filtrar una nómina para ver únicamente a los estudiantes que tienen calidad de "Prioritario SEP".
- **Paso a paso:**
  1. En la columna `G3`, agrega el encabezado: `Condición Escolar`.
  2. En las filas de abajo ingresa: `Prioritario SEP`, `Regular`, `Prioritario SEP`.
  3. Selecciona la fila de encabezados (A3:G3).
  4. En la pestaña **Datos**, haz clic en el botón grande **Filtro** (icono de embudo). Verás aparecer una pequeña flechita en cada encabezado.
  5. Haz clic en la flecha de la columna *Condición Escolar*.
  6. Desmarca la casilla *(Seleccionar todo)* y marca **ÚNICAMENTE** la casilla `Prioritario SEP`. Haz clic en **Aceptar**.
  7. Para volver a ver a todos los alumnos: haz clic en el embudo con flechita roja y selecciona **Borrar filtro de "Condición Escolar"**.
- **Resultado esperado para autoevaluación:** La pantalla muestra solo a los alumnos prioritarios; los números de fila se ponen de color azul avisando que hay un filtro activo.

---

### TEMA 6: Inmovilizar Paneles en Nóminas Largas

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Inmovilizar paneles es como **pegar con cinta adhesiva la primera fila de títulos arriba en la pantalla**.
> - Cuando tienes una nómina de 45 estudiantes y bajas con el mouse hasta el alumno 38, los títulos ("Nota 1", "Nota 2", "Asistencia") desaparecen arriba y ya no sabes qué número estás mirando.
> - Al **Inmovilizar la Fila Superior**, los títulos quedan congelados fijos arriba mientras tú te desplazas libremente hacia abajo.

---

#### Ejercicio Guiado 6.1: Inmovilizar la Fila de Títulos
- **Situación escolar:** Un inspector de nivel registra la asistencia de una lista larga y necesita que los encabezados queden fijos en pantalla.
- **Paso a paso:**
  1. En una planilla con más de 20 filas escritas, dirígete a la pestaña **Vista** en la Cinta de Opciones.
  2. En el grupo *Ventana*, haz clic en el botón **Inmovilizar**.
  3. En el menú desplegable, selecciona **Inmovilizar fila superior** (o sitúate en la fila debajo de tus títulos y elige *Inmovilizar paneles*).
  4. Usa la rueda del mouse o la barra de desplazamiento lateral para bajar hasta la fila 30.
  5. Observa cómo la fila de encabezados permanece visible en todo momento.
- **Resultado esperado para autoevaluación:** Los encabezados nunca se ocultan al bajar por la lista de estudiantes.

---

#### Ejercicio Guiado 6.2: Inmovilizar Filas y Columnas al Mismo Tiempo
- **Situación escolar:** En una planilla ancha con 12 meses de asistencia, necesitas ver al mismo tiempo el nombre del alumno a la izquierda y el mes de noviembre a la derecha.
- **Paso a paso:**
  1. Haz clic en la celda **C4** (justo debajo de la fila de títulos y a la derecha de la columna de nombres).
  2. Ve a la pestaña **Vista > Inmovilizar > Inmovilizar paneles**.
  3. Desplázate hacia abajo: los títulos quedan fijos.
  4. Desplázate hacia la derecha: los nombres de los estudiantes quedan fijos a la izquierda.
  5. Para desactivarlo en cualquier momento: ve a *Vista > Inmovilizar > Movilizar paneles*.
- **Resultado esperado para autoevaluación:** Control total de navegación horizontal y vertical simultánea en planillas grandes.

---

### TEMA 7: Configuración de Impresión Económica (Ajustar a 1 Página)

#### Explicación Sencilla y Analogía Escolar
> **Analogía:** Imprimir en Excel sin configurar la página es como **cortar una foto con tijeras por la mitad**: casi siempre la última columna de firmas o promedios queda huérfana en una segunda hoja en blanco.
> - Con la opción **"Ajustar todas las columnas en una página"**, Excel reduce milimétricamente el tamaño para que toda la planilla entre exacta y completa a lo ancho en una sola hoja.
> - Con **Imprimir Títulos**, si la lista tiene 80 alumnos y ocupa 2 hojas reales, la segunda hoja imprime automáticamente el encabezado arriba para saber qué columna es cada una.

---

#### Ejercicio Guiado 7.1: El Ajuste Mágico de 1 Página de Ancho
- **Situación escolar:** La planilla de notas tiene 7 columnas y al imprimir sale cortada en 2 hojas. Se debe ajustar para que quepa en 1 sola hoja horizontal.
- **Paso a paso:**
  1. Ve a la pestaña **Disposición de página** (o *Diseño de página*).
  2. En **Orientación**, selecciona **Horizontal**.
  3. En **Tamaño**, verifica que esté en **Carta** (o *Oficio* chileno de 33 cm).
  4. Presiona el atajo de teclado **Ctrl + P** para entrar a la Vista Previa de Impresión.
  5. En el panel lateral izquierdo, baja hasta la última opción que dice **Sin escalado**.
  6. Haz clic sobre ella y selecciona **Ajustar todas las columnas en una página**.
  7. Mira la vista previa: todas las columnas quedan perfectamente contenidas dentro de los márgenes de una sola hoja.
- **Resultado esperado para autoevaluación:** La planilla completa se imprime en una sola hoja legible sin desperdiciar papel de la fotocopiadora.

---

#### Ejercicio Guiado 7.2: Repetir Filas de Encabezado en Hojas Múltiples
- **Situación escolar:** Imprimir una nómina institucional de 90 estudiantes que requiere 2 páginas, pero la página 2 debe llevar los mismos títulos de columna.
- **Paso a paso:**
  1. Ve a la pestaña **Disposición de página**.
  2. En el grupo *Configurar página*, haz clic en el botón **Imprimir títulos** (icono de hoja con encabezado).
  3. En la ventana que se abre, sitúate en la casilla **Filas para repetir en el extremo superior**.
  4. Haz clic en el botón con flecha roja de esa casilla y luego haz clic sobre el número de la fila de tus encabezados (ejemplo: haz clic en el número `3` de la izquierda).
  5. Haz clic en **Vista previa de impresión**.
  6. Pasa a la página 2: notarás que los títulos aparecen automáticamente arriba.
- **Resultado esperado para autoevaluación:** Documento de varias hojas ordenado y fácil de leer para el equipo directivo.

---

## 5. Actividad Integradora Final del Módulo

### Nombre del Proyecto: "Planilla Maestra de Calificaciones, Asistencia y Estadísticas del Liceo TP Gonzalo Guglielmi M"
**Contexto Escolar:** La Unidad Técnico Pedagógica (UTP) y la Dirección del Liceo solicitan elaborar la planilla oficial de cierre de unidad para el curso 3° Medio TP. Debes estructurar la nómina de estudiantes, calcular notas, promedios, estadísticas globales y dejar la planilla lista para ser filtrada e impresa sin errores.

### Instrucciones Paso a Paso para los Participantes:
1. **Estructura y Formato Institucional:**
   - Crear un libro nuevo y renombrar la hoja como `3Medio_TP_2026`.
   - Encabezado combinado en filas 1 y 2 con fondo verde institucional y texto blanco: `LICEO TP GONZALO GUGLIELMI M • REGISTRO DE EVALUACIONES TP`.
   - Crear la tabla con las siguientes columnas:
     `N°` | `Estudiante` | `RUN` | `Nota 1` | `Nota 2` | `Nota 3` | `Promedio Final` | `% Asistencia` | `Situación`.
2. **Ingreso de Datos y Formato de Número:**
   - Registrar al menos 5 estudiantes de prueba con nombres reales, RUN y notas en escala 1.0 a 7.0.
   - Formatear las columnas de notas y promedios con **1 decimal exacto**.
   - Formatear la columna de asistencia con formato **Porcentaje (%)**.
3. **Fórmulas y Cálculos Automáticos:**
   - Calcular el `Promedio Final` de cada estudiante usando la fórmula `=PROMEDIO(D4:F4)`.
   - En una sección inferior de estadísticas, calcular usando fórmulas:
     - Promedio General del Curso (`=PROMEDIO`).
     - Nota Más Alta del Curso (`=MAX`).
     - Nota Más Baja del Curso (`=MIN`).
     - Total de Alumnos Evaluados (`=CONTAR`).
4. **Filtros e Inmovilización:**
   - Aplicar **Filtros** en la fila de encabezados.
   - **Inmovilizar la fila superior** para que los títulos se mantengan visibles al bajar.
5. **Configuración de Impresión:**
   - Orientación **Horizontal**, tamaño **Carta**, márgenes Normales.
   - Configurar **"Ajustar todas las columnas en una página"** y guardar como: `Planilla_Calificaciones_3MedioTP_[TuNombre].xlsx`.

---

## 6. Pauta de Evaluación del Proyecto Integrador

**Puntaje Total:** 100 Puntos | **Exigencia:** 60% (60 puntos para aprobación)

| Criterio de Evaluación | Indicadores de Logro Observables | Puntaje Máximo |
| :--- | :--- | :---: |
| **1. Estructura y Formato de Celdas** | • Encabezado institucional combinado y centrado con colores correctos.<br>• Notas formateadas con 1 decimal exacto y asistencia en porcentaje. | **20 pts** |
| **2. Fórmulas de Promedio por Fila** | • Aplica correctamente `=PROMEDIO(...)` en cada estudiante.<br>• Uso eficiente del autorrelleno hacia abajo. | **25 pts** |
| **3. Fórmulas Estadísticas (MAX, MIN, CONTAR)** | • Calcula nota máxima, mínima, promedio general y total evaluados con fórmulas. | **20 pts** |
| **4. Filtros y Organización de Datos** | • Activa filtros en encabezados y ordena alfabéticamente por apellido. | **15 pts** |
| **5. Inmovilización de Paneles** | • Inmoviliza correctamente filas para desplazamiento continuo. | **10 pts** |
| **6. Configuración de Impresión** | • Configura vista horizontal ajustada a 1 página de ancho sin columnas cortadas. | **10 pts** |
| **TOTAL** | **Evaluación Integral de Competencias Excel Inicial** | **100 pts** |

---

## 7. Cuestionario de Cierre del Módulo (7 Preguntas)

#### 1. ¿Cuál es el primer carácter obligatorio que se debe escribir en una celda para que Excel reconozca que vas a ingresar una fórmula o cálculo?
- a) Un punto (`.`)
- b) El signo igual (`=`) *(Correcta)*
- c) Una comilla (`"`)
- d) Un signo más (`+`)
> **Retroalimentación pedagógica:** En Excel toda fórmula o función debe comenzar siempre con el signo `=` para activar el motor de cálculo.

#### 2. Si en la celda F4 quieres calcular el promedio de las notas que van desde la celda C4 hasta la E4, ¿cuál es la fórmula correcta?
- a) `=SUMAR(C4:E4)/3`
- b) `=PROMEDIO(C4:E4)` *(Correcta)*
- c) `=PROMEDIO(C4;E4)`
- d) `PROMEDIO(C4-E4)`
> **Retroalimentación pedagógica:** `=PROMEDIO(C4:E4)` utiliza los dos puntos (`:`) para indicar el rango continuo desde la celda C4 hasta la E4.

#### 3. ¿Qué significa el símbolo de dos puntos (`:`) en una fórmula como `=SUMA(A1:A10)`?
- a) Que solo suma la celda A1 y la celda A10.
- b) Que divide la celda A1 por la celda A10.
- c) Que suma todas las celdas continuas DESDE la A1 HASTA la A10. *(Correcta)*
- d) Que da un mensaje de error.
> **Retroalimentación pedagógica:** Los dos puntos representan un rango continuo entre la celda inicial y la celda final.

#### 4. Si al ingresar un número o fecha en una celda de Excel aparecen solo signos numerales (`#######`), ¿cuál es la causa y cómo se soluciona?
- a) La fórmula está rota y hay que borrarla.
- b) El computador tiene un virus.
- c) La columna es demasiado angosta para mostrar la cifra; se soluciona ensanchando la columna con doble clic en la división superior. *(Correcta)*
- d) El número es negativo.
> **Retroalimentación pedagógica:** `#######` no es un error matemático, solo indica que el ancho de la columna no alcanza para mostrar el contenido completo.

#### 5. Para encontrar rápidamente la nota más baja obtenida en una prueba del curso, ¿qué función de Excel debes utilizar?
- a) `=BAJA(...)`
- b) `=MIN(...)` *(Correcta)*
- c) `=MENOR(...)`
- d) `=CONTAR(...)`
> **Retroalimentación pedagógica:** `=MIN(...)` busca y extrae automáticamente el valor numérico menor dentro de un rango de celdas.

#### 6. ¿Qué herramienta de Excel permite congelar la fila de títulos de una nómina para que no desaparezca al desplazarse hacia abajo en la pantalla?
- a) Ajustar texto
- b) Inmovilizar paneles (Inmovilizar fila superior) *(Correcta)*
- c) Bloquear celda
- d) Combinar y centrar
> **Retroalimentación pedagógica:** En la pestaña *Vista > Inmovilizar paneles*, fijamos las filas superiores en la vista de pantalla.

#### 7. Al momento de imprimir una planilla ancha para que no salga cortada en dos hojas distintas, ¿qué opción de escalado se debe seleccionar en la Vista Previa de Impresión?
- a) Sin escalado
- b) Ajustar todas las columnas en una página *(Correcta)*
- c) Imprimir en tamaño póster
- d) Duplicar hojas
> **Retroalimentación pedagógica:** La opción *Ajustar todas las columnas en una página* escala automáticamente el ancho de la tabla para que quepa en los márgenes de una sola hoja.

---

## 8. Materiales Visuales y Recursos Disponibles

1. **Hoja de Referencia Rápida Excel Inicial:** [`guia_rapida_atajos_excel_inicial.html`](file:///C:/Users/Cristian/Desktop/Curso_Office_Asistentes_Educacion/Modulo3_Excel_Inicial/guia_rapida_atajos_excel_inicial.html)
2. **Infografía Visual del Módulo 3:** [`infografia_excel_inicial.html`](file:///C:/Users/Cristian/Desktop/Curso_Office_Asistentes_Educacion/Modulo3_Excel_Inicial/infografia_excel_inicial.html)
