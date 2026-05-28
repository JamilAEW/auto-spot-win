El usuario quiere que en todas las páginas de EcoBoost se indique explícitamente:
1. El trabajo dura **2 días de trabajo** (no "mismo día" como PureTech).
2. Se **incluye la bomba de agua** en el servicio de EcoBoost (no en PureTech).

Esto requiere hacer condicionales en los componentes compartidos (`PillarPage`, `ModelPage`) y actualizar textos en páginas de ruta.

### Cambios necesarios

**1. Componente `src/components/PillarPage.tsx`**
- En el aside de precios (línea ~89), cambiar "Entrega el mismo día" a condicional:
  - PureTech: "Entrega el mismo día"
  - EcoBoost: "2 días de trabajo"
- Añadir a la lista de "Incluye" del aside (línea ~84-95), solo para EcoBoost: "Bomba de agua incluida"
- En la sección de ventajas (línea ~142), cambiar "En 4–6 horas tu coche está listo." a condicional:
  - PureTech: "En 4–6 horas tu coche está listo."
  - EcoBoost: "2 días de trabajo. Garantía de acabado profesional."
- En el CTA final (línea ~200), cambiar "Cambio el mismo día." a condicional:
  - PureTech: "Cambio el mismo día."
  - EcoBoost: "Entrega en 2 días hábiles."

**2. Componente `src/components/ModelPage.tsx`**
- En el aside de precios (línea ~86), cambiar "Entrega el mismo día" a condicional por pilar.
- Añadir a la lista de beneficios del aside (línea ~81-92), solo para EcoBoost: "Bomba de agua nueva incluida"
- En las FAQs internas (línea ~31), cambiar la respuesta de duración a condicional:
  - PureTech: "Entre 4 y 6 horas. Si nos lo dejas por la mañana, lo recoges por la tarde."
  - EcoBoost: "2 días de trabajo. Te informamos de la entrega al confirmar el presupuesto."
- En el CTA final (línea ~186), cambiar "Cambio el mismo día" a condicional por pilar.
- En `modelFaqs` (línea ~215), ajustar la respuesta de duración según pilar.
- En la lista de "Qué incluye" (línea ~133-143), añadir "Bomba de agua nueva" solo para EcoBoost.

**3. Página `src/routes/motor-ecoboost.tsx`**
- Añadir a `heroLead` una mención: "Duración: 2 días de trabajo."
- Actualizar FAQ de garantía o añadir una nueva que mencione "Incluimos bomba de agua en el cambio de correa EcoBoost."

**4. Páginas de modelos EcoBoost (Focus, Fiesta, EcoSport)**
- Actualizar la `description` en el `head()` de cada una para reemplazar "Entrega el mismo día" por "Entrega en 2 días hábiles".

**5. Página `src/routes/precios.tsx`**
- En la tabla comparativa (línea ~109), cambiar la fila "Tiempo de entrega" → columna StopCars:
  - De: "Mismo día"
  - A: "Mismo día (PureTech) / 2 días (EcoBoost)"
- O mejor: separar en dos filas o poner "1-2 días según motor".
- Añadir nota bajo la tabla: "El servicio EcoBoost incluye bomba de agua."

**6. Página `src/routes/correa-distribucion-sumergida.tsx`**
- En la FAQ de duración (línea ~32), diferenciar:
  - "Entregamos el coche el mismo día para PureTech (4-6h). En EcoBoost el trabajo requiere 2 días de trabajo."
- En la lista del kit Dayco (línea ~148-165), añadir una viñeta condicional: "Bomba de agua incluida (EcoBoost)" o similar.

**7. Página `src/routes/index.tsx`**
- En `PROCESO` (línea ~55), cambiar "Cambio el mismo día" por "Cambio en 1-2 días según motor".
- En `VENTAJAS` (línea ~61), cambiar "Entregamos tu coche en menos de 1 día." por "Entrega rápida: mismo día o 2 días según motor."
- En la FAQ de duración (línea ~36), diferenciar PureTech (mismo día) y EcoBoost (2 días).

### Nota técnica
Los componentes `PillarPage` y `ModelPage` reciben `model.pillar` o la prop `pillar`, por lo que la lógica condicional es trivial: `pillar === "EcoBoost"` vs `pillar === "PureTech"`.