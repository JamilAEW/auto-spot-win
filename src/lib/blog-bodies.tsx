/**
 * Contenido completo de los 10 artículos del blog.
 * Cada función devuelve JSX con el cuerpo del artículo, listo para
 * renderizarse dentro de <ArticleLayout>.
 */
import { Link } from "@tanstack/react-router";

export const articleBodies: Record<string, () => React.ReactNode> = {
  "problema-correa-puretech": () => (
    <>
      <p>
        Si tienes un <strong>Peugeot, Citroën, Opel o DS</strong> con motor PureTech 1.0 o 1.2, hay un dato que tu concesionario no siempre te cuenta con claridad: la correa de distribución de tu coche puede destruir el motor mucho antes del kilometraje que indica la revisión oficial.
      </p>
      <h2>¿Qué es la correa de distribución bañada en aceite?</h2>
      <p>
        El motor PureTech estrenó en 2014 una solución técnica novedosa: una <strong>correa de distribución sumergida</strong> en el cárter, lubricada por el propio aceite del motor. Sustituye a la cadena tradicional para reducir fricción, ruido y emisiones de CO₂.
      </p>
      <p>
        Sobre el papel suena bien. En la práctica, el contacto continuo con el aceite degrada la goma de la correa, que <strong>libera microfragmentos</strong> que terminan obstruyendo el filtro y la bomba de aceite.
      </p>
      <h2>El problema real: por qué falla</h2>
      <p>
        Cuando esos restos de goma llegan al circuito de lubricación se produce una <strong>cascada de fallos</strong>:
      </p>
      <ul>
        <li>El filtro de aceite se obstruye y abre el bypass de seguridad: el aceite circula sin filtrar.</li>
        <li>La bomba de aceite pierde caudal y la presión cae.</li>
        <li>El motor se queda sin lubricación y aparecen daños en cojinetes y árbol de levas.</li>
        <li>En el peor caso, la correa rompe o salta dientes y las válvulas chocan con los pistones: <strong>destrucción total</strong> del motor.</li>
      </ul>
      <h2>Modelos PureTech afectados</h2>
      <p>
        Prácticamente todos los Stellantis con el motor 1.2 PureTech entre 2014 y 2022: Peugeot 208, 308, 2008, 3008; Citroën C3, C4, C4 Cactus; Opel Corsa, Grandland; DS3 y DS7. Consulta la <Link to="/motor-puretech">página de motor PureTech</Link> con la lista completa.
      </p>
      <h2>¿Qué puedes hacer hoy?</h2>
      <p>
        La única forma sensata de proteger el motor es <strong>cambiar la correa preventivamente</strong> con un kit reforzado Dayco, mucho antes de los 100.000 km que recomienda el fabricante. En <Link to="/motor-puretech">StopCars Madrid</Link> hacemos el cambio completo por <strong>399 €</strong>.
      </p>
    </>
  ),

  "sintomas-correa-puretech": () => (
    <>
      <p>
        El motor PureTech rara vez avisa "por escrito" de que la correa está al límite. Pero hay <strong>7 síntomas claros</strong> que, combinados, no dejan lugar a dudas. Si reconoces dos o más, llévalo a revisar.
      </p>
      <h2>1. Traqueteo en frío al arrancar</h2>
      <p>
        Es el síntoma número uno. Un sonido <em>tac-tac-tac</em> los primeros 5–15 segundos tras arrancar en frío. La correa patina porque ha perdido tensión y los tensores hidráulicos no han presurizado.
      </p>
      <h2>2. Consumo anormal de aceite</h2>
      <p>
        Un PureTech sano consume menos de 0,3 L cada 1.000 km. Si rellenas medio litro o más con frecuencia, hay un problema en el sistema de lubricación.
      </p>
      <h2>3. Testigo de presión de aceite encendido</h2>
      <p>
        Si se enciende, <strong>para el coche inmediatamente</strong>. Indica que la bomba o el filtro están obstruidos por restos de la correa.
      </p>
      <h2>4. Pérdida de potencia</h2>
      <p>
        La centralita reduce prestaciones para proteger el motor cuando detecta anomalías en presión o temperatura del aceite.
      </p>
      <h2>5. Olor a goma quemada</h2>
      <p>
        Inconfundible. El roce de la correa degradada genera olor que llega al habitáculo, sobre todo al ralentí.
      </p>
      <h2>6. Ruidos metálicos al ralentí</h2>
      <p>
        Golpeteo continuo del tipo <em>tic-tic</em> sincronizado con el régimen del motor: el árbol de levas o la bomba sufren falta de lubricación.
      </p>
      <h2>7. Inspección visual: aceite oscuro y con partículas</h2>
      <p>
        Si al cambiar el aceite aparecen pequeños fragmentos negros similares a goma, es señal definitiva. Revisión urgente.
      </p>
      <p>
        ¿Reconoces alguno? Pide tu diagnóstico gratuito en <Link to="/contacto">StopCars Madrid</Link>.
      </p>
    </>
  ),

  "cuando-cambiar-correa-puretech": () => (
    <>
      <p>
        La pregunta del millón: ¿cuándo hay que cambiar la correa de un PureTech? Stellantis dice <strong>100.000 km o 6 años</strong>. La realidad es más matizada.
      </p>
      <h2>El intervalo oficial</h2>
      <p>
        100.000 km / 6 años, sustituyendo en el momento que ocurra primero. Aplica a versiones 1.0 PureTech y 1.2 PureTech turbo y atmosférico.
      </p>
      <h2>Por qué deberías adelantarlo</h2>
      <p>
        El intervalo oficial asume condiciones ideales: aceite siempre homologado, ciclos de uso largos en autovía, mantenimiento al día. En la práctica:
      </p>
      <ul>
        <li><strong>Uso urbano intensivo en Madrid:</strong> el motor pasa más tiempo a baja temperatura, el aceite se degrada antes y la correa sufre más.</li>
        <li><strong>Aceite no homologado:</strong> usar aceite que no cumpla la norma Stellantis acelera la degradación.</li>
        <li><strong>Cambios de aceite tardíos:</strong> superar los 15.000 km con el mismo aceite es asumir riesgos.</li>
      </ul>
      <h2>Recomendación realista</h2>
      <p>
        En StopCars Madrid recomendamos <strong>80.000 km o 5 años</strong> en uso urbano y <strong>100.000 km o 6 años</strong> en uso mixto/autovía. Si aparece cualquier síntoma (traqueteo, consumo de aceite, testigo), cámbiala ya.
      </p>
      <h2>Checklist antes de los 80.000 km</h2>
      <ul>
        <li>Diagnóstico visual de la correa (foto endoscópica del cárter).</li>
        <li>Análisis del aceite usado.</li>
        <li>Comprobación de presión y caudal de la bomba de aceite.</li>
      </ul>
      <p>
        ¿Estás cerca del intervalo? Pide tu cita en <Link to="/motor-puretech">StopCars</Link>.
      </p>
    </>
  ),

  "precio-correa-puretech-2025": () => (
    <>
      <p>
        ¿Cuánto cuesta de verdad cambiar la correa de distribución PureTech en Madrid en 2026? Hicimos comparativa real con concesionarios y talleres genéricos. Estos son los datos.
      </p>
      <h2>Concesionario oficial Stellantis</h2>
      <p>
        Entre <strong>800 € y 1.200 €</strong> según modelo. Incluye recambios originales y mano de obra a tarifa oficial. Plazo: 1–3 días.
      </p>
      <h2>Taller multimarca genérico</h2>
      <p>
        Entre <strong>500 € y 700 €</strong>. Suelen usar correa genérica y, en muchos casos, no incluyen el cambio de bomba de aceite ni el aceite homologado.
      </p>
      <h2>Taller especialista (StopCars)</h2>
      <p>
        <strong>399 € cerrado</strong> con IVA, mano de obra, kit Dayco reforzado, aceite homologado y filtro nuevo. Garantía 24 meses. Entrega el mismo día.
      </p>
      <h2>¿Por qué la diferencia?</h2>
      <ul>
        <li>El concesionario aplica tarifa-hora alta y margen sobre recambios.</li>
        <li>El taller genérico ahorra en piezas (mala idea con esta avería).</li>
        <li>El especialista compra volumen, conoce el motor al detalle y tarda menos: traslada el ahorro al cliente.</li>
      </ul>
      <h2>¿Qué debe incluir un presupuesto serio?</h2>
      <ul>
        <li>Correa, tensor y rodillos (kit completo).</li>
        <li>Aceite homologado por Stellantis (no genérico).</li>
        <li>Filtro de aceite nuevo.</li>
        <li>Diagnóstico de la bomba de aceite.</li>
        <li>Garantía mínima 24 meses por escrito.</li>
      </ul>
      <p>
        Pide tu <Link to="/precios">presupuesto cerrado</Link> en 5 minutos por WhatsApp.
      </p>
    </>
  ),

  "garantia-stellantis-puretech": () => (
    <>
      <p>
        Tras la presión mediática y miles de averías, Stellantis ha extendido la garantía del motor PureTech para casos concretos. Te explicamos paso a paso cómo reclamar.
      </p>
      <h2>¿Qué cubre la garantía extendida?</h2>
      <ul>
        <li>Daños internos del motor derivados del fallo de la correa de distribución sumergida.</li>
        <li>Sustitución de la correa, tensores y bomba de aceite si se demuestra el defecto.</li>
        <li>En algunos casos, sustitución completa del motor.</li>
      </ul>
      <h2>Requisitos imprescindibles</h2>
      <ol>
        <li>Mantenimiento oficial al día (todas las revisiones realizadas en los plazos marcados).</li>
        <li>Uso del aceite homologado Stellantis en cada cambio.</li>
        <li>Demostrar que la avería se origina en la correa (no por mal uso).</li>
      </ol>
      <h2>Pasos para reclamar</h2>
      <ol>
        <li><strong>Diagnóstico técnico independiente:</strong> consigue un informe de un taller especialista que documente la causa raíz.</li>
        <li><strong>Reúne el historial:</strong> facturas de todos los mantenimientos.</li>
        <li><strong>Reclamación escrita al concesionario:</strong> presenta documentación y solicita garantía extendida por escrito.</li>
        <li><strong>Respuesta del fabricante:</strong> Stellantis tiene 30 días para responder.</li>
        <li><strong>Si rechaza:</strong> reclamación a OMIC y, si procede, vía judicial colectiva.</li>
      </ol>
      <h2>¿Y si Stellantis no cubre?</h2>
      <p>
        Hay cobertura por <strong>vicio oculto</strong> según el Código Civil español hasta 6 meses tras la avería, aplicable incluso fuera de la garantía oficial. Consulta con un abogado especializado.
      </p>
      <p>
        En <Link to="/contacto">StopCars Madrid</Link> emitimos informes técnicos para reclamaciones.
      </p>
    </>
  ),

  "ecoboost-correa-humeda": () => (
    <>
      <p>
        El problema de la correa de distribución sumergida no es exclusivo del PureTech. El motor <strong>Ford EcoBoost 1.0</strong> usa la misma tecnología desde 2012 y arrastra exactamente los mismos fallos.
      </p>
      <h2>¿Qué motor Ford monta correa húmeda?</h2>
      <p>
        El EcoBoost 1.0 turbo de 3 cilindros, presente en Ford Fiesta, Focus, EcoSport, B-Max, C-Max y Puma. Una unidad muy elogiada por su consumo, pero con el mismo defecto de diseño que el PureTech.
      </p>
      <h2>Síntomas idénticos</h2>
      <ul>
        <li>Traqueteo metálico al arrancar en frío.</li>
        <li>Consumo anormal de aceite.</li>
        <li>Testigo de presión de aceite encendido.</li>
        <li>Pérdida de potencia y olor a goma quemada.</li>
      </ul>
      <h2>Intervalo recomendado</h2>
      <p>
        Ford recomienda <strong>150.000 km o 10 años</strong>. Por experiencia, en uso urbano y con aceite no homologado conviene adelantarlo a 140.000 km.
      </p>
      <h2>¿Cubre Ford la avería?</h2>
      <p>
        Ford no ha hecho una extensión de garantía pública como Stellantis, pero acepta reclamaciones caso a caso si demuestras mantenimiento al día y aceite homologado.
      </p>
      <h2>Cambio en taller especialista</h2>
      <p>
        En <Link to="/motor-ecoboost">StopCars Madrid</Link> cambiamos correa EcoBoost bajo presupuesto personalizado, con kit Dayco reforzado, bomba de agua incluida, aceite homologado y garantía 24 meses. Misma calidad y mejor precio que un concesionario.
      </p>
    </>
  ),

  "consumo-aceite-puretech": () => (
    <>
      <p>
        Si tu PureTech consume más aceite del normal, no es un capricho del motor: es una <strong>señal de alarma</strong> que casi siempre apunta a la correa de distribución.
      </p>
      <h2>¿Cuánto aceite es normal?</h2>
      <p>
        Un PureTech sano consume entre <strong>0,1 y 0,3 litros cada 1.000 km</strong>. Más de eso ya es indicio de problema; más de 0,5 L/1.000 km exige revisión inmediata.
      </p>
      <h2>Causas más frecuentes</h2>
      <ol>
        <li><strong>Correa de distribución degradada:</strong> los fragmentos de goma obstruyen filtro y separador, alterando el sistema de lubricación.</li>
        <li><strong>Segmentos de pistón pegados:</strong> consecuencia de la mala lubricación derivada del fallo anterior.</li>
        <li><strong>Turbo desgastado:</strong> el turbo del PureTech es sensible a aceites no homologados.</li>
        <li><strong>Válvula PCV defectuosa:</strong> permite paso excesivo de aceite a la admisión.</li>
      </ol>
      <h2>Diagnóstico correcto</h2>
      <ul>
        <li>Medición de consumo durante 1.000 km controlados.</li>
        <li>Análisis del aceite usado (busca partículas de goma).</li>
        <li>Inspección endoscópica del cárter para ver el estado de la correa.</li>
        <li>Test de presión en cilindros para descartar segmentos.</li>
      </ul>
      <h2>Solución</h2>
      <p>
        Si el origen está en la correa, el cambio completo (correa + tensores + bomba si procede + aceite homologado) corta el problema de raíz.
      </p>
      <p>
        Pide tu diagnóstico gratuito en <Link to="/contacto">StopCars</Link>.
      </p>
    </>
  ),

  "traqueteo-arranque-puretech": () => (
    <>
      <p>
        Ese sonido <em>tac-tac-tac</em> los primeros segundos al arrancar tu PureTech en frío no es normal. Aunque desaparezca a los pocos segundos, te está avisando de algo importante.
      </p>
      <h2>¿Qué provoca el traqueteo?</h2>
      <p>
        En el momento del arranque en frío, la presión de aceite tarda 1–3 segundos en establecerse. Si la correa de distribución está desgastada o los tensores hidráulicos no presurizan rápido, la correa <strong>patina</strong> y produce el sonido característico.
      </p>
      <h2>¿Cuándo empieza a ser preocupante?</h2>
      <ul>
        <li>Si el traqueteo dura más de 5 segundos.</li>
        <li>Si se repite todas las mañanas.</li>
        <li>Si lo notas también en caliente al ralentí.</li>
        <li>Si va acompañado de testigo de aceite o pérdida de potencia.</li>
      </ul>
      <h2>¿Qué hacer?</h2>
      <ol>
        <li><strong>No lo ignores:</strong> el desgaste avanza muy rápido una vez aparece.</li>
        <li><strong>Revisión urgente:</strong> diagnóstico endoscópico del cárter y comprobación de tensores.</li>
        <li><strong>Plan de acción:</strong> normalmente cambio completo de correa con kit reforzado.</li>
      </ol>
      <h2>¿Se puede solo cambiar la correa sin más?</h2>
      <p>
        No es lo recomendable. Si la correa está degradada, los <strong>fragmentos pueden estar ya en el circuito</strong> de aceite. Hay que cambiar correa + tensores + aceite + filtro y, en muchos casos, comprobar bomba de aceite.
      </p>
      <p>
        En <Link to="/motor-puretech">StopCars Madrid</Link> hacemos el cambio completo por 399 €.
      </p>
    </>
  ),

  "modelos-afectados-puretech": () => (
    <>
      <p>
        Más de 30 modelos del Grupo Stellantis montan motor PureTech con correa sumergida. Esta es la <strong>lista actualizada</strong> a 2026 organizada por marca.
      </p>
      <h2>Peugeot</h2>
      <ul>
        <li><Link to="/peugeot-208-puretech-madrid">Peugeot 208</Link> (2014–2022) — 1.2 PureTech 75/82/100/110/130 CV</li>
        <li><Link to="/peugeot-308-puretech-madrid">Peugeot 308</Link> (2014–2022) — 1.2 PureTech 110/130 CV</li>
        <li><Link to="/peugeot-2008-puretech-madrid">Peugeot 2008</Link> (2013–2022) — 1.2 PureTech 110/130 CV</li>
        <li><Link to="/peugeot-3008-puretech-madrid">Peugeot 3008</Link> (2016–2022) — 1.2 PureTech 130 CV</li>
        <li>Peugeot 5008 (2017–2022) — 1.2 PureTech 130 CV</li>
        <li>Peugeot Rifter (2018–2022) — 1.2 PureTech 110/130 CV</li>
      </ul>
      <h2>Citroën</h2>
      <ul>
        <li><Link to="/citroen-c3-puretech-madrid">Citroën C3</Link> (2017–2022)</li>
        <li><Link to="/citroen-c4-puretech-madrid">Citroën C4</Link> (2014–2022)</li>
        <li><Link to="/citroen-c4-cactus-puretech-madrid">Citroën C4 Cactus</Link> (2014–2020)</li>
        <li>Citroën C3 Aircross (2017–2022)</li>
        <li>Citroën Berlingo (2018–2022)</li>
      </ul>
      <h2>Opel</h2>
      <ul>
        <li><Link to="/opel-corsa-puretech-madrid">Opel Corsa</Link> (2019–2023)</li>
        <li><Link to="/opel-grandland-puretech-madrid">Opel Grandland</Link> (2017–2023)</li>
        <li>Opel Crossland (2020–2023)</li>
        <li>Opel Mokka (2020–2023)</li>
      </ul>
      <h2>DS Automobiles</h2>
      <ul>
        <li><Link to="/ds3-puretech-madrid">DS3</Link> (2016–2022)</li>
        <li><Link to="/ds7-puretech-madrid">DS7</Link> (2018–2023)</li>
        <li>DS4 (2021–2023)</li>
      </ul>
      <h2>¿No ves tu modelo?</h2>
      <p>
        Si tu coche tiene un PureTech 1.0 o 1.2 fabricado entre 2014 y 2023, casi seguro está afectado. Contáctanos en <Link to="/contacto">StopCars Madrid</Link> y lo confirmamos en el día.
      </p>
    </>
  ),

  "diferencia-correa-cadena": () => (
    <>
      <p>
        Cuando compras coche, una de las preguntas clásicas es: ¿correa o cadena de distribución? Te explicamos las diferencias técnicas y cuál es mejor según tu uso.
      </p>
      <h2>Correa de distribución (seca)</h2>
      <p>
        Hecha de goma reforzada con fibra. Va por fuera del motor, en una cubierta seca. <strong>Ventajas:</strong> ligera, silenciosa, barata de fabricar. <strong>Inconvenientes:</strong> hay que cambiarla cada 80.000–140.000 km.
      </p>
      <h2>Cadena de distribución</h2>
      <p>
        Cadena metálica que dura toda la vida del motor (en teoría). <strong>Ventajas:</strong> sin mantenimiento programado. <strong>Inconvenientes:</strong> más ruidosa, más pesada, más cara y, si se estira, la reparación es muy costosa.
      </p>
      <h2>Correa de distribución sumergida (wet belt)</h2>
      <p>
        Híbrido entre las dos: una correa de goma alojada dentro del cárter, lubricada por aceite. Es lo que monta el PureTech y el EcoBoost. Pretende combinar las ventajas de ambas, pero en la práctica suma las desventajas: <strong>se desgasta como una correa pero contamina el sistema de lubricación</strong>.
      </p>
      <h2>Comparativa rápida</h2>
      <table>
        <thead>
          <tr><th>Tipo</th><th>Mantenimiento</th><th>Coste cambio</th><th>Riesgo</th></tr>
        </thead>
        <tbody>
          <tr><td>Correa seca</td><td>80–120k km</td><td>300–600 €</td><td>Medio</td></tr>
          <tr><td>Cadena</td><td>Sin programa</td><td>1.500–3.000 €</td><td>Bajo / Alto si falla</td></tr>
          <tr><td>Correa sumergida</td><td>100–150k km</td><td>399–1.200 €</td><td>Alto si no se previene</td></tr>
        </tbody>
      </table>
      <h2>¿Cuál es mejor?</h2>
      <p>
        Para uso urbano e intensivo, una <strong>cadena de distribución</strong> bien diseñada gana. Si ya tienes coche con correa sumergida, la clave es <strong>cambio preventivo</strong> y aceite homologado.
      </p>
      <p>
        ¿Necesitas cambiar la tuya? Pide cita en <Link to="/correa-distribucion-sumergida">StopCars Madrid</Link>.
      </p>
    </>
  ),
};
