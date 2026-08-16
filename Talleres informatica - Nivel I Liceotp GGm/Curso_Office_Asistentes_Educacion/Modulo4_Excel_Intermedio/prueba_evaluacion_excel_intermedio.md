# Instrumento de Evaluación Escrita – Módulo 4: Excel Intermedio
## Liceo TP Gonzalo Guglielmi M
### Curso: Microsoft Office 2019 para Asistentes de la Educación

---

**Nombre Funcionario(a):** __________________________________________________  
**Cargo / Función en el Liceo:** _____________________________________________  
**Fecha:** _____________________ **Puntaje Total:** 30 Pts **Exigencia:** 60% (Nota 4.0 con 18 pts)  
**Puntaje Obtenido:** _______ Pts **Calificación Final:** _________

---

### Ítem I: Selección Múltiple (2 pts c/u – Total: 12 Pts)
*Marque con una X o encierre en un círculo la alternativa correcta:*

1. **En la fórmula `=SI(F4>=4.0; "Aprobado"; "Reprobado")`, si el estudiante tiene un promedio de 3.8 en F4, ¿qué resultado muestra Excel?**
   - a) "Aprobado"
   - b) "Reprobado"
   - c) `#¡VALOR!`

2. **En la función `=BUSCARV(B2; A4:E200; 4; FALSO)`, ¿qué significa el valor 4?**
   - a) Que busca en la fila 4.
   - b) Que devolverá el dato ubicado en la cuarta columna de la tabla.
   - c) Que solo busca notas iguales a 4.0.

3. **¿Por qué es indispensable escribir FALSO al final de una fórmula BUSCARV para buscar un RUN de alumno?**
   - a) Porque exige una coincidencia 100% exacta y evita traer datos de otro estudiante.
   - b) Para que no cobre por la búsqueda.
   - c) Porque la fórmula contiene un error.

4. **Si deseas que los docentes solo puedan elegir el curso desde una lista desplegable sin escribirlo a mano, ¿qué herramienta usas?**
   - a) Formato Condicional
   - b) Validación de datos con opción "Lista"
   - c) Inmovilizar paneles

5. **¿Cómo se logra que todas las notas menores a 4.0 se destaquen automáticamente en color rojo sin pintarlas manualmente?**
   - a) Cambiando la fuente a rojo.
   - b) Formato condicional > Reglas para resaltar celdas > Es menor que 4.0.
   - c) Función `SI(F4<4.0; "Rojo"; "Negro")`.

6. **¿Cuál es la principal utilidad de una Tabla Dinámica en el Liceo TP Gonzalo Guglielmi M?**
   - a) Resumir y totalizar datos masivos por especialidad técnica en segundos sin escribir fórmulas.
   - b) Dibujar gráficos animados.
   - c) Proteger la hoja con contraseña.

---

### Ítem II: Construcción de Fórmulas Avanzadas (2 pts c/u – Total: 8 Pts)

1. **Escribe la fórmula exacta con la Función SI para que en la celda G4 escriba `"Aprobado"` si el promedio en F4 es mayor o igual a 4.0, o `"Reprobado"` si es menor:**  
   `=` __________________________________________________________________________

2. **Escribe la fórmula exacta con la Función SI para que en la celda I4 escriba `"CITAR APODERADO"` si el % de asistencia en H4 es menor al 85%, o `"Regular"` si no lo es:**  
   `=` __________________________________________________________________________

3. **Tienes una base de datos de alumnos en A7:E100 (Columna 1: RUN, Columna 2: Nombre Alumno, Columna 5: Teléfono Apoderado). Escribe la fórmula de BUSCARV para traer el Teléfono del Apoderado buscando el RUN escrito en la celda B2:**  
   `=` __________________________________________________________________________

4. **¿Cómo proteges la fórmula anterior para que si el RUN no existe en el liceo muestre `"No Registrado"` en vez del error `#N/D`?**  
   `= SI.ERROR(` _________________________________________________________ `; "No Registrado" )`

---

### Ítem III: Caso de Gestión y Seguridad de Planillas (10 Pts)

**Situación Escolar:** Debes entregar una planilla a los docentes de especialidad TP para que ingresen notas, pero necesitas asegurar que nadie borre las fórmulas de los promedios ni ingrese notas como "8.5" o "-2".

**a)** Explica cómo configuras la *Validación de Datos* para que solo acepte notas decimales entre 1.0 y 7.0: (5 pts)  
_________________________________________________________________________________________  
_________________________________________________________________________________________

**b)** Explica los 2 pasos exactos para proteger las fórmulas con contraseña permitiendo escribir solo en las casillas de notas: (5 pts)  
_________________________________________________________________________________________  
_________________________________________________________________________________________

---

### 🔑 Pauta de Corrección y Clave Docente (Exclusivo Relator)
- **Ítem I:** 1-b, 2-b, 3-a, 4-b, 5-b, 6-a (12 pts)
- **Ítem II:** 1: `=SI(F4>=4.0; "Aprobado"; "Reprobado")`, 2: `=SI(H4<85%; "CITAR APODERADO"; "Regular")`, 3: `=BUSCARV(B2; A7:E100; 5; FALSO)`, 4: `BUSCARV(B2; A7:E100; 5; FALSO)` (8 pts)
- **Ítem III:** a) Seleccionar celdas de notas > Pestaña Datos > Validación de datos > Permitir: Decimal > entre 1.0 y 7.0 (5 pts). b) Paso 1: Seleccionar solo casillas de notas, clic derecho > Formato de celdas > Proteger > desmarcar "Bloqueada". Paso 2: Pestaña Revisar > Proteger hoja y fijar contraseña para bloquear el resto de la planilla (5 pts).
