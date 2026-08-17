# INFORME TÉCNICO-NORMATIVO

## Impacto de la Ley N° 21.663 (Ciberseguridad) y la Ley N° 21.719 (Protección de Datos Personales) en Establecimientos Educacionales Dependientes de DAEM y SLEP

**Fecha de elaboración:** Agosto de 2026  
**Horizonte de análisis:** Plena vigencia a diciembre de 2026  
**Público destinatario:** Directores de establecimientos educacionales, Jefes DAEM, Directores Ejecutivos de SLEP, Encargados de Informática/TI, Equipos Jurídicos Municipales y de SLEP.

---

> **DESCARGO DE RESPONSABILIDAD**
>
> El presente documento tiene carácter exclusivamente **informativo-orientador** y no constituye asesoría legal vinculante. Las interpretaciones normativas, conclusiones y recomendaciones aquí contenidas se basan en el análisis general de la legislación vigente a agosto de 2026, complementado con fuentes oficiales públicamente disponibles. Se recomienda encarecidamente la consulta con abogados especialistas en derecho público, ciberseguridad y protección de datos personales para la implementación específica de las medidas descritas en cada institución. Los autores no asumen responsabilidad por decisiones adoptadas con base exclusiva en este informe.

---

## I. RESUMEN EJECUTIVO

El presente informe analiza el impacto jurídico-operativo que producen conjuntamente la **Ley N° 21.663** (Ley Marco sobre Ciberseguridad e Infraestructura Crítica de la Información, publicada el 8 de abril de 2024, con vigencia integral desde el 1 de marzo de 2025) y la **Ley N° 21.719** (que modifica la Ley N° 19.628 sobre Protección de la Vida Privada, publicada el 13 de diciembre de 2024, con vigencia plena programada para el **1 de diciembre de 2026**) en los establecimientos educacionales de administración pública, tanto los dependientes de Departamentos de Administración de Educación Municipal (DAEM) como los adscritos a Servicios Locales de Educación Pública (SLEP).

Ambos cuerpos normativos imponen a los órganos de la Administración del Estado —calidad que ostentan tanto las municipalidades (a través de sus DAEM) como los SLEP— un nuevo estándar de diligencia tecnológica y de tutela sobre los datos personales que tratan. Este estándar transita desde un modelo históricamente reactivo e informal hacia uno de **prevención, gobernanza activa, rendición de cuentas y fiscalización con sanciones efectivas**.

El sector educativo público presenta una exposición de riesgo particularmente elevada: trata masivamente datos de menores de edad, datos sensibles (diagnósticos PIE, necesidades educativas especiales, fichas de salud, antecedentes socioeconómicos) y opera infraestructura tecnológica frecuentemente heterogénea y subinvertida.

**Las 5 obligaciones de mayor impacto operativo identificadas son:**

1. **Gobernanza de ciberseguridad:** Implementación de sistemas de gestión de seguridad de la información, designación de encargados y elaboración de planes de respuesta a incidentes (artículo 8, Ley N° 21.663).
2. **Reporte obligatorio de incidentes:** Notificación al CSIRT Nacional en plazos perentorios de 3 horas (alerta temprana) y 72 horas (reporte intermedio) (artículo 9, Ley N° 21.663).
3. **Designación de Delegado de Protección de Datos:** Obligatoriedad vinculada al Modelo de Prevención de Infracciones, sujeto a fiscalización de la Contraloría (artículo 49, Ley N° 21.719).
4. **Gestión de derechos ARCOP:** Implementación de canales formales para responder solicitudes de titulares (Ley N° 21.719), con implicancias directas en normativas como la Ley de Identidad de Género.
5. **Protección reforzada de datos de menores:** Régimen especial que exige consentimiento del representante legal para menores de 16 años y evaluaciones de impacto obligatorias (Ley N° 21.719).

**El plazo crítico es el 1 de diciembre de 2026**, fecha de entrada en vigencia plena de la Ley N° 21.719. La Ley N° 21.663, por su parte, ya se encuentra plenamente vigente desde marzo de 2025.

---

## II. MARCO NORMATIVO APLICABLE

### 2.1. Ley N° 21.663 — Ley Marco sobre Ciberseguridad e Infraestructura Crítica de la Información

**Publicación:** 8 de abril de 2024.  
**Vigencia integral:** 1 de marzo de 2025.

**Objeto y alcance.** Esta ley establece la institucionalidad, los principios y la normativa general aplicable a las acciones de ciberseguridad de los organismos del Estado y de las instituciones privadas que prestan servicios esenciales o son calificadas como Operadores de Importancia Vital (OIV). Crea la **Agencia Nacional de Ciberseguridad (ANCI)** como servicio público funcional y territorialmente descentralizado, con facultades normativas, fiscalizadoras y sancionatorias (artículo 10). Establece además el **CSIRT Nacional** para la respuesta técnica ante incidentes y el **Registro Nacional de Incidentes de Ciberseguridad**.

**Sujetos obligados.** Los órganos de la Administración del Estado son sujetos directamente obligados. Las municipalidades —en cuanto órganos autónomos de la Administración del Estado conforme a la Ley N° 18.695 Orgánica Constitucional de Municipalidades— y los SLEP —en cuanto servicios públicos descentralizados creados por la Ley N° 21.040— quedan plenamente comprendidos dentro del ámbito subjetivo de aplicación.

### 2.2. Ley N° 21.719 — Nueva Ley de Protección de Datos Personales

**Publicación:** 13 de diciembre de 2024.  
**Vigencia plena programada:** 1 de diciembre de 2026.

**Objeto y alcance.** Reforma íntegramente la Ley N° 19.628 sobre Protección de la Vida Privada, alineando a Chile con estándares internacionales (particularmente el RGPD). Crea la **Agencia de Protección de Datos Personales (APDP)** como autoridad de control independiente con facultades de investigación y sanción.

*[Nota: a agosto de 2026, existen informaciones de prensa que señalan dificultades en el nombramiento del consejo directivo de la APDP y propuestas legislativas de ajuste (Boletín N° 18.060-07). Se recomienda verificar con fuentes oficiales el estado definitivo de la institucionalidad y la fecha de vigencia al momento de implementación].*

### 2.3. Interacción con Leyes del Sector Educación y Rol de la Superintendencia

La **Ley N° 20.370** (Ley General de Educación) consagra el derecho a la educación y el resguardo de la integridad de los estudiantes. La protección de la privacidad digital constituye una extensión de este mandato. Adicionalmente, la **Ley N° 21.040** ordena la transferencia de la administración educacional desde los municipios (DAEM) hacia los SLEP, redefiniendo las responsabilidades institucionales.

**Rol de la Superintendencia de Educación:** Es el fiscalizador sectorial primario. En caso de que una vulneración de seguridad o filtración de datos afecte la integridad psicológica o moral de un estudiante (por ejemplo, exposición pública de antecedentes de salud mental o diagnósticos NEE), la Superintendencia de Educación tiene plena potestad para intervenir, instruir sumarios e imponer sanciones administrativas al sostenedor, **de forma paralela e independiente** a los procedimientos sancionatorios de la ANCI o la APDP.

### 2.4. Naturaleza jurídica de DAEM y SLEP — Consecuencias normativas

| Dimensión | DAEM (Régimen Municipal) | SLEP (Régimen Ley N° 21.040) |
|:---|:---|:---|
| **Naturaleza jurídica** | Dirección orgánica de la municipalidad. Sin personalidad jurídica propia. | Servicio público descentralizado, con personalidad jurídica y patrimonio propio (art. 16, Ley 21.040). |
| **Responsable legal** | La Municipalidad, representada por el Alcalde. | El SLEP, representado por su Director Ejecutivo. |
| **Calidad ante la Ley N° 21.663** | Órgano de la Administración del Estado (sujeto obligado). | Órgano de la Administración del Estado (sujeto obligado). |
| **Calidad ante la Ley N° 21.719** | Responsable de tratamiento de datos (la Municipalidad). | Responsable de tratamiento de datos (el SLEP directamente). |
| **Cadena de responsabilidad** | Diluida: el departamento municipal de TI suele no tener foco exclusivo escolar. | Directa: el SLEP concentra la responsabilidad administrativa y técnica. |

### 2.5. Calificación como Operadores de Importancia Vital

La calificación como OIV no es automática; requiere resolución de la ANCI. A la fecha, **no se ha verificado una calificación expresa de los establecimientos educacionales públicos como OIV** *[Nota: pendiente de verificación final]*. Sin embargo, las obligaciones generales descritas a continuación aplican en su calidad de órganos del Estado.

---

## III. OBLIGACIONES EN MATERIA DE CIBERSEGURIDAD (Ley N° 21.663)

### a) Obligaciones de gobernanza

El artículo 8 establece la obligatoriedad de implementar:
- **Sistemas de gestión de seguridad de la información (SGSI).**
- **Planes de continuidad operacional y ciberseguridad.**
- **Ejercicios y simulacros** periódicos.
- **Designación de encargado de ciberseguridad** (Punto de contacto ante CSIRT).
- **Políticas internas de uso aceptable de TIC.**

### b) Medidas técnicas

Implementación proporcional al riesgo de: autenticación multifactor (MFA), gestión constante de vulnerabilidades (parches), segmentación de redes, respaldos inmutables y cifrado de datos sensibles.

### c) Obligaciones de reporte

El artículo 9 impone la obligación perentoria de reportar al **CSIRT Nacional**:

| Tipo de reporte | Plazo máximo | Contenido mínimo |
|:---|:---|:---|
| **Alerta temprana** | 3 horas desde la detección | Identificación del incidente, sistemas afectados, gravedad estimada. |
| **Reporte intermedio** | 72 horas | Detalle de sistemas comprometidos, datos afectados, medidas de contención adoptadas. |
| **Reporte final** | 30 días *[Nota: Plazo regido por Ley 19.880 sobre días hábiles administrativos, pendiente de revisión con DS N° 295/2024]* | Análisis completo, causa raíz, impacto definitivo, lecciones aprendidas. |

### d) Régimen sancionatorio

Las multas administradas por la ANCI alcanzan hasta **10.000 UTM** (infracciones graves) y **20.000 UTM** (gravísimas) para entidades no OIV. Para órganos del Estado, a estas sumas millonarias a beneficio fiscal se suma la responsabilidad por falta de servicio y los sumarios contra jefaturas (Alcaldes, Directores Ejecutivos).

---

## IV. OBLIGACIONES EN MATERIA DE PROTECCIÓN DE DATOS PERSONALES (Ley N° 21.719)

### a) Categorías de datos tratados

Los DAEM y SLEP tratan datos ordinarios (RUT, contactos), datos del personal, y críticamente, **datos de menores** y **datos sensibles** (diagnósticos PIE, antecedentes NEE, fichas de salud y socioeconómicas).

### b) Bases de licitud del tratamiento

Para el sector público, operan fundamentalmente dos bases: **Ejercicio de funciones públicas** (asistencia, calificaciones) y **Cumplimiento de obligación legal** (reportes Mineduc/SIGE). Para casos fuera de estas funciones (ej. uso de imágenes en redes sociales institucionales), se requiere el **Consentimiento** explícito.

### c) Derechos ARCOP y Cruces Normativos

Los establecimientos deben disponer canales formales y gratuitos para responder en un plazo de **30 días corridos** (o 2 días hábiles para el derecho de Bloqueo) a las solicitudes de Acceso, Rectificación, Cancelación, Oposición y Portabilidad.

- **Cruce con Ley de Identidad de Género (Ley N° 21.120):** El derecho de *Rectificación* interactúa directamente con el derecho de estudiantes trans a ser reconocidos por su nombre social. Los sistemas de información (SIGE, libros de clases digitales, LMS) deben contemplar flujos expeditos de rectificación de registros para cumplir con ambas leyes y evitar vulneraciones por trato discriminatorio.

### d) Evaluación de Impacto en Protección de Datos (EIPD)

Es **obligatoria** antes de iniciar tratamientos de alto riesgo: uso de biometría (asistencia por huella), tratamientos masivos de diagnósticos PIE, videovigilancia escolar (CCTV) o adopción de Inteligencia Artificial para perfilar a estudiantes.

### e) Delegado de Protección de Datos (DPD) y Rol de la Contraloría

La designación del DPD (art. 49) se presenta como voluntaria en la ley general, pero resulta exigible si la organización opta por certificar un **Modelo de Prevención de Infracciones**. 

Para los DAEM y SLEP, esto es **estratégicamente ineludible**. Adicionalmente, la **Contraloría General de la República (CGR)** integrará de manera progresiva estos estándares en sus pautas de auditoría pública. Esto transforma la designación del DPD y la implementación del Modelo en un imperativo de probidad administrativa que será fiscalizado directamente por la CGR, más allá de la propia APDP.

### f) Tratamiento de datos de menores

El tratamiento de datos de menores de 16 años requiere obligatoriamente el **consentimiento del representante legal** y debe subordinarse siempre al interés superior del niño, con políticas de privacidad redactadas en lenguaje comprensible.

### g) Transferencia internacional de datos

El uso de suites de ofimática en la nube (Google Workspace, Office 365) exige asegurar que el proveedor resida en un país con **decisión de adecuación**, o bien, utilizar cláusulas contractuales tipo estandarizadas.

---

## V. BRECHAS Y RIESGOS IDENTIFICADOS

### 5.1. Recursos presupuestarios limitados
Las partidas municipales rara vez contemplan rubros específicos para licencias, cortafuegos o servicios de ciberseguridad, operando en subinversión estructural.

### 5.2. Heterogeneidad de infraestructura
Coexistencia de redes no segmentadas y equipos obsoletos (sin parches) en la misma red por la que transita información confidencial.

### 5.3. Capacidades TI y Cultura
Personal informático desbordado por funciones de soporte técnico (hardware), sin formación específica en ciberseguridad normativa.

### 5.4. Shadow IT (Uso de apps no autorizadas)
Docentes utilizando aplicaciones edtech de terceros sin que el establecimiento haya auditado los términos y condiciones de privacidad de la herramienta.

### 5.5. Manejo informal de la información
Uso extendido de WhatsApp personal, pendrives no cifrados y correos comerciales gratuitos para transmitir informes psicológicos, diagnósticos y calificaciones de estudiantes.

### 5.6. Ausencia de protocolos de incidentes
Cultura organizacional que prefiere "solucionar en silencio" los hackeos o pérdidas de datos en lugar de contar con un plan documentado de reporte.

### 5.7. Compras Públicas y Adquisición Tecnológica (Ley N° 19.886)
La contratación de licencias (LMS, correos, plataformas edtech) mediante **Mercado Público** suele basarse en precio, careciendo de especificaciones de seguridad. Las bases de licitación deberán incorporar obligatoriamente cláusulas sobre residencia de datos, certificaciones ISO y cumplimiento de las leyes 21.663/21.719.

---

## VI. HOJA DE RUTA DE CUMPLIMIENTO (4 FASES)

### Fase 1 — Diagnóstico (Meses 0 a 2)
- Mapeo de datos personales (qué, dónde, por qué, quién).
- Inventario de activos de información y redes.
- Análisis de brechas (gap analysis) normativo.
- **Auditoría de contratos y revisión de bases de licitación tipo en Mercado Público.**

### Fase 2 — Diseño (Meses 2 a 4)
- Designación formal de DPD y Encargado de Ciberseguridad.
- Elaboración de Política de Seguridad y protocolos de respuesta.
- Diseño del Modelo de Prevención de Infracciones (art. 49).
- **Actualización de cláusulas tipo para licitaciones y adendas con proveedores tecnológicos.**

### Fase 3 — Implementación (Meses 4 a 8)
- Despliegue técnico: Autenticación multifactor (MFA), segmentación, respaldos inmutables.
- Habilitación de canales de respuesta ARCOP.
- Erradicación de canales informales (prohibición de uso institucional de WhatsApp y nubes personales).
- Capacitación obligatoria al personal docente y directivo.
- Ejecución de EIPD para tratamientos de riesgo existentes.

### Fase 4 — Monitoreo (Permanente)
- Auditorías semestrales de accesos al SIGE y LMS.
- Simulacros de respuesta a incidentes (tabletop exercises).
- Integración en la matriz de riesgos institucionales (preparación ante auditorías CGR).

---

## VII. CONCLUSIONES Y RECOMENDACIONES

Las Leyes N° 21.663 y N° 21.719 configuran un mandato jurídico ineludible. El incumplimiento expone a los establecimientos a sumarios administrativos, investigación de la Superintendencia de Educación, auditorías de Contraloría y multas fiscales de hasta 40.000 UTM (2.600 millones de pesos aprox.).

**Recomendaciones Priorizadas:**
1. **Compromiso Directivo:** El Alcalde o Director Ejecutivo SLEP debe patrocinar el plan y asegurar presupuesto.
2. **Cero Tolerancia a la Informalidad:** Erradicar el tránsito de datos sensibles por WhatsApp y correos personales. Es el riesgo más inminente.
3. **Actualización en Mercado Público:** Cambiar el estándar de compras. Ninguna herramienta de software debe ser contratada si el proveedor no garantiza los estándares de la Ley 21.719.
4. **Designación del DPD y Encargado:** Nombramiento inmediato centralizado a nivel de DAEM/SLEP para generar economías de escala procedimentales.

El 1 de diciembre de 2026 marca el fin del período preparatorio para la ley de datos. **El costo de la adecuación preventiva es diametralmente inferior al costo político, económico y reputacional del incumplimiento.**

---

## VIII. REFERENCIAS NORMATIVAS

1. **Ley N° 21.663**, Ley Marco sobre Ciberseguridad e Infraestructura Crítica de la Información. (Vigencia: 1 de marzo de 2025).
2. **Ley N° 21.719**, Modifica Ley N° 19.628 sobre Protección de la Vida Privada. (Vigencia plena: 1 de diciembre de 2026).
3. **Ley N° 21.040**, Sistema de Educación Pública (Creación de los SLEP).
4. **Ley N° 20.370**, Ley General de Educación.
5. **Ley N° 18.695**, Orgánica Constitucional de Municipalidades.
6. **Ley N° 19.886**, De Bases sobre Contratos Administrativos de Suministro y Prestación de Servicios (Mercado Público).
7. **Ley N° 21.120**, Reconoce y da protección al derecho a la identidad de género.
8. **Ley N° 19.880**, Bases de los Procedimientos Administrativos (Regulación de plazos administrativos).
9. **Decreto Supremo N° 295/2024** Reglamento sobre reporte de incidentes (Pendiente de verificación final).
10. **Oficios e Instrucciones:** CGR, Superintendencia de Educación, ANCI y APDP.

---
*Fin del Informe.*
