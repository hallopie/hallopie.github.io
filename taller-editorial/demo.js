/* Modo demostración del Taller Editorial: respuestas de ejemplo preparadas, sin IA ni servidor. */
"use strict";
const DEMO_DIAG = {
  resumen: "Son memorias del Camino de Santiago (León → Santiago, septiembre de 2017), escritas nueve años después. El libro tiene buena materia prima y una voz propia muy clara; lo que necesita es edición, no reescritura. Conviven dos voces: una base pulida que suena a IA y tus agregados en mayúsculas, que son lo más vivo del libro (C1¶3).",
  voz_del_autor: [
    "Hablas en máximas de vendedor: «para atrás, ni para tomar vuelo», «llegar a tiempo es llegar tarde».",
    "Te ríes de ti mismo: el bocadillo pedido caliente, decirle «mesero» al camarero.",
    "Te gusta poner entre paréntesis lo que piensas en voz baja: «(ni modo, es parte de mi deformación profesional)».",
    "Usas preguntas directas al lector: «¿Podrías ser un buen bastón o aceptarías uno?».",
    "Inventas conceptos propios con nombre: la DIOSA MENTE, el «empujoncito», la soledad consciente.",
    "Tus mejores pasajes son concretos: frutas tiradas en el camino, la neblina en el Monte do Gozo, el cable de celular regalado."
  ],
  reglas_estilo: [
    "Las mayúsculas sostenidas se pasan a mayúsculas y minúsculas; para enfatizar se usa cursiva.",
    "Los diálogos van con raya (—), no entre comillas.",
    "Comillas latinas « » para frases citadas y máximas.",
    "Se conservan las expresiones coloquiales del autor («ni modo», «a todo lo que da»).",
    "Los números del uno al diez van con letra; distancias y fechas, con número (42 km, 2017).",
    "Cada lema aparece completo una sola vez y, si regresa, como eco breve."
  ],
  repeticiones: [
    {frase:"Cada quien camina su propio camino", lugares:["C1¶5","C5¶35","C5¶41","C12¶19"], propuesta:"Dejarlo como lema en el Capítulo I y en el cierre."},
    {frase:"El Camino no te enseña, solo saca de ti lo que ya traes", lugares:["C8¶20","C10¶69","C11¶18"], propuesta:"Una sola vez, en el Capítulo XI, como gran conclusión."},
    {frase:"La salida de ruta cerca de Cacabelos", lugares:["C7¶31","C10¶48"], propuesta:"Si fue la misma vez, contarla solo en el Capítulo VII."},
    {frase:"La lista del regalo de Navidad 2016", lugares:["C1¶16","C3¶4"], propuesta:"Contarla completa en el Capítulo III."},
    {frase:"Escoger las batallas", lugares:["C2¶10","C10¶41","C10¶42","C12¶8"], propuesta:"En el Capítulo X está dos veces seguidas; dejar una."}
  ],
  contradicciones: [
    {descripcion:"Tres veces dices que no sentiste dolor ni cansancio, pero cuentas ampollas y dolor de rodillas al llegar a Santiago.", lugares:["C8¶33","C10¶17","C11¶9"], pregunta:"¿Lo cambiamos por «hubo dolor, pero nunca me hizo pensar en abandonar»?"},
    {descripcion:"La plática con Alfonso fue «de café» y en el gimnasio del hotel, en la misma frase.", lugares:["C1¶9"], pregunta:"¿Dónde fue la plática?"},
    {descripcion:"Anuncias «dos aprendizajes» y solo se nombra el de José.", lugares:["C5¶6"], pregunta:"¿Cuál era el segundo?"}
  ],
  datos_por_verificar: [
    {dice:"Dagoberto D. Runes", sugerencia:"Dagobert D. Runes", lugar:"C9¶29"},
    {dice:"Plaza de Obradeiro", sugerencia:"Plaza del Obradoiro", lugar:"C11¶10"},
    {dice:"Carcabelos / Bierrzo", sugerencia:"Cacabelos / Villafranca del Bierzo", lugar:"C7¶30"},
    {dice:"El metro «por el mismo costo del vuelo»", sugerencia:"Confirmar qué quisiste decir", lugar:"C4¶10"},
    {dice:"La portadilla dice «Capítulos I al IX»", sugerencia:"Son XII capítulos", lugar:""}
  ],
  rasgos_ia: [
    {rasgo:"Cascadas de frases cortas, una por párrafo", ejemplo:"El viaje ya no era una idea. Ya no era…", lugar:"C4¶4"},
    {rasgo:"La fórmula «no es X, es Y»", ejemplo:"no es demostrar que hice el Camino, es compartir…", lugar:"C1¶22"},
    {rasgo:"Moralejas de cierre al final de cada sección", ejemplo:"Y quizá la lección no sea cargar más ni cargar menos…", lugar:"C6¶39"},
    {rasgo:"Reflexión abstracta donde iría una anécdota", ejemplo:"incluso dentro de una misma familia pueden existir…", lugar:"C5¶55"}
  ],
  preguntas_al_autor: [
    "¿El libro ya tiene título?",
    "¿Te perdiste una vez o dos? (C7¶31 y C10¶48)",
    "¿Tienes fotos del Camino que quieras incluir? (la Compostela, la cima, la Cruz de Hierro)",
    "¿Quieres dedicatoria y agradecimientos?"
  ]
};
const DEMO_PORTADAS = {
  tipografica:{fondo:"#1c2a44", tinta:"#f3ecdc", acento:"#c8a35a", porque:"Sobria y clásica: azul noche con un filete dorado, como las colecciones de memorias de las editoriales de antes."},
  ilustrada:{concepto:"El camino de tierra que se pierde entre cerros, con la concha del peregrino como sol.", fondo:"#efe6d2", tinta:"#22303f", porque:"La concha del peregrino como sol sobre el camino: el viaje y la meta en una sola imagen.",
    svg:"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 210'><rect width='140' height='210' fill='#efe6d2'/><g transform='translate(70 98)'><path d='M0 22 L-26 -6 A30 30 0 0 1 26 -6 Z' fill='#d9a441'/><g stroke='#efe6d2' stroke-width='1.6' fill='none'><path d='M0 22 L-20 -14'/><path d='M0 22 L-10 -20'/><path d='M0 22 L0 -22'/><path d='M0 22 L10 -20'/><path d='M0 22 L20 -14'/></g><rect x='-6' y='20' width='12' height='5' rx='1.5' fill='#d9a441'/></g><path d='M0 150 Q35 128 70 140 T140 132 L140 210 L0 210 Z' fill='#a8b48a'/><path d='M0 168 Q40 150 82 160 T140 154 L140 210 L0 210 Z' fill='#6f8a5b'/><path d='M0 186 Q50 172 96 180 T140 176 L140 210 L0 210 Z' fill='#4c6645'/><path d='M66 210 C68 190 70 172 72 150 C73 172 78 192 92 210 Z' fill='#c9a878'/></svg>"},
  subtitulo_sugerido:"Lo que el Camino sacó de mí"
};

const DEMO_NOTAS = {"1": {"fondo": {"comentario": "Un arranque honesto y con humor. Lo que más pide trabajo es que aquí ya se cuentan cosas que el libro repite después (el regalo y el lema). Ver C3¶2.", "sugerencias": [{"p": 16, "tipo": "repetición", "original": "mis hijos Lau, Rod y VERO, MI ESPOSA, Y mis primos Karla y Daniel, me regalaron", "propuesta": "mi familia me regaló", "porque": "La lista completa del regalo se repite casi igual en C3¶2. Propongo contarla completa allá, donde el regalo es el centro del capítulo, y aquí solo anunciarla."}, {"p": 9, "tipo": "contradicción", "original": "comenzó en una plática de café con mi amigo Alfonso, cuando yo estaba de visita en Mérida, él me invitó al gimnasio del hotel donde YO estaba hospedado", "propuesta": "comenzó en una plática con mi amigo Alfonso, cuando yo estaba de visita en Mérida: él me invitó al gimnasio del hotel donde estaba hospedado", "porque": "¿Fue en un café o en el gimnasio? En la misma frase aparecen los dos lugares. Si fue en el gimnasio, quito «de café»."}, {"p": 5, "tipo": "repetición", "original": "NADA DE LO QUE PLAZMO AQUI ES ABSOLUTO, TODO ES RELATIVO Y CIRCUNSTANCIAL", "propuesta": "Nada de lo que plasmo aquí es absoluto; todo es relativo y circunstancial:", "porque": "Aquí nace el lema del libro, «cada quien camina su propio camino». Aparece siete veces más (C5, C7, C10, C12). Propongo que viva aquí y al final, para que pese más cuando regrese."}]}, "estilo": {"comentario": "Tu voz se oye clarísima en lo que agregaste. Las partes que más suenan a máquina son los cierres de reflexión.", "sugerencias": [{"p": 22, "tipo": "suena a IA", "original": "La intención de este CONTENIDO no es demostrar que híce el Camino, es compartir lo que el Camino hizo visible en mí.", "propuesta": "No escribo esto para presumir que hice el Camino; lo escribo para compartir lo que el Camino me hizo ver de mí mismo.", "porque": "«No es X, es Y» es una de las fórmulas más típicas de la IA, y «hizo visible en mí» no suena a ti. Lo digo más como lo dirías platicando."}, {"p": 23, "tipo": "claridad", "original": "Si alguna experiencia de estas páginas ayuda a otra persona a cuestionarse; prepararse; decider; caminar más ligero; escuchar el silencio; ayudar a alguien o simplemente preguntarse hacia dónde quiere ir, entonces habrá valido la pena escribirlo.", "propuesta": "Si alguna experiencia de estas páginas ayuda a otra persona a cuestionarse, prepararse, decidir, caminar más ligero, escuchar el silencio, ayudar a alguien o simplemente preguntarse hacia dónde quiere ir, habrá valido la pena escribirlo.", "porque": "Los punto y coma cortan la lectura; en una lista van comas. «Decider» es inglés: va «decidir»."}, {"p": 7, "tipo": "voz", "original": "EMPEZANDO POR HABER SIDO EL MAS AUDAS PARA PODER SER GESTADO ENTRE UNA MILLANADA DE OPCIONES DENTRO DEL VIENTRE DE MI MADRE.", "propuesta": "empezando por haber sido el más audaz entre millones de competidores para llegar a ser gestado en el vientre de mi madre.", "porque": "El chiste es muy tuyo y se queda. Solo lo ordeno para que se entienda a la primera."}]}}, "2": {"fondo": {"comentario": "Capítulo de ideas. Funciona mejor cuando aterriza en anécdotas tuyas (el tianguis de tu mamá, pagarte la universidad).", "sugerencias": [{"p": 8, "tipo": "repetición", "original": "(EN EL AREA COMERCIAL DECIMOS, NO EL QUE TRABAJA MAS GANA MAS, SINO EL QUE TRABAJA MAS INTELIGENTEMENTE)", "propuesta": "", "porque": "Esta máxima regresa completa en C6 con más contexto (tus capacitaciones de ventas). Propongo dejarla solo allá."}]}, "estilo": {"comentario": "", "sugerencias": []}}, "4": {"fondo": {"comentario": "El capítulo más ágil hasta ahora: la anécdota del bocadillo es de lo mejor del libro.", "sugerencias": [{"p": 10, "tipo": "dato", "original": "que por el mismo costo del vuelo me llevaría hasta Atocha Renfe", "propuesta": "que por el costo de un boleto sencillo me llevaría hasta Atocha Renfe", "porque": "¿El metro costó lo mismo que el vuelo? Creo que quisiste decir otra cosa. Confírmame y lo ajusto."}, {"p": 13, "tipo": "dato", "original": "“LLEGAR EN TIEMPO, ES LLEGAR TARDE”", "propuesta": "«Llegar a tiempo es llegar tarde»", "porque": "Confírmame cómo decía exactamente la máxima de ventas; la versión más conocida es «llegar a tiempo es llegar tarde»."}]}, "estilo": {"comentario": "Aquí está el tic de IA más claro del libro: cuatro frases cortas, cada una en su párrafo.", "sugerencias": [{"p": 4, "tipo": "suena a IA", "original": "El viaje ya no era una idea.", "propuesta": "El viaje ya no era una idea, ni una plática con Alfonso, ni un proyecto familiar: era una realidad.", "porque": "Cuatro párrafos de una línea seguidos son una fórmula muy de IA. Junto las cuatro ideas en una frase; las otras tres notas proponen quitar las líneas sobrantes."}, {"p": 5, "tipo": "sobra", "original": "Ya no era una conversación con Alfonso.", "propuesta": "", "porque": "Ya queda dentro de la frase anterior."}, {"p": 6, "tipo": "sobra", "original": "Ya no era un proyecto familiar.", "propuesta": "", "porque": "Ya queda dentro de la frase anterior."}, {"p": 7, "tipo": "sobra", "original": "Era una realidad.", "propuesta": "", "porque": "Ya queda dentro de la frase anterior."}]}}, "7": {"fondo": {"comentario": "", "sugerencias": [{"p": 30, "tipo": "dato", "original": "CARCABELOS", "propuesta": "Cacabelos", "porque": "El pueblo se llama Cacabelos."}, {"p": 30, "tipo": "dato", "original": "VILLAFRANCA DEL BIERRZO", "propuesta": "Villafranca del Bierzo", "porque": "Se escribe Bierzo, con una sola erre."}]}, "estilo": {"comentario": "", "sugerencias": []}}, "9": {"fondo": {"comentario": "", "sugerencias": [{"p": 29, "tipo": "dato", "original": "La frase es de Dagoberto D. Runes.", "propuesta": "La frase es de Dagobert D. Runes.", "porque": "El autor de la frase es Dagobert D. Runes, filósofo y editor estadounidense."}]}, "estilo": {"comentario": "", "sugerencias": []}}, "10": {"fondo": {"comentario": "El capítulo más emotivo del libro. Ojo con dos cosas que no cuadran con el resto.", "sugerencias": [{"p": 17, "tipo": "contradicción", "original": "nunca sentí miedo, dolor, cansancio ni una duda que me hiciera pensar en no continuar.", "propuesta": "hubo dolor y cansancio, pero nunca una duda que me hiciera pensar en no continuar.", "porque": "Unos párrafos antes cuentas tus ampollas, y en C6 y C11 hablas de dolor de rodillas. Creo que lo que quieres decir es que el dolor nunca te hizo pensar en abandonar."}]}, "estilo": {"comentario": "", "sugerencias": []}}, "11": {"fondo": {"comentario": "", "sugerencias": [{"p": 10, "tipo": "dato", "original": "PLAZA DE OBRADEIRO", "propuesta": "Plaza del Obradoiro", "porque": "El nombre de la plaza es Obradoiro."}]}, "estilo": {"comentario": "", "sugerencias": []}}};

const MAYUS_PROPIOS = {"santiago":"Santiago","camino":"Camino","alfonso":"Alfonso","león":"León","leon":"León","madrid":"Madrid","mérida":"Mérida","merida":"Mérida","dios":"Dios","josé":"José","jose":"José","ricardo":"Ricardo","españa":"España","lau":"Lau","rod":"Rod","vero":"Vero","karla":"Karla","daniel":"Daniel","diosa":"Diosa","mente":"Mente","compostela":"Compostela","sarria":"Sarria","molinaseca":"Molinaseca","excel":"Excel","méxico":"México","mexico":"México","navidad":"Navidad","cruz":"Cruz","hierro":"Hierro","obradoiro":"Obradoiro","herrerias":"Herrerías","herrerías":"Herrerías","fonfria":"Fonfría","rabanal":"Rabanal","atocha":"Atocha","renfe":"Renfe","catedral":"Catedral","gozo":"Gozo","monte":"Monte","mundial":"Mundial"};
const DEMO_TYPOS = {"conciente":"consciente","concientes":"conscientes","capas":"capaz","decier":"decir","menra":"manera","plazmo":"plasmo","plazmarlo":"plasmarlo","casdaso":"casado","audas":"audaz","millanada":"millonada","inatas":"innatas","treves":"través","diero":"dieron","perosnale":"personales","patendo":"pateando","simpre":"siempre","futas":"frutas","futos":"frutos","desidir":"decidir","desidido":"decidido","desidi":"decidí","desision":"decisión","desiciones":"decisiones","reveldia":"rebeldía","revelde":"rebelde","disfutar":"disfrutar","disfute":"disfruté","disfuta":"disfruta","disfrtuar":"disfrutar","silencion":"silencio","sienciion":"silencio","rudio":"ruido","entuciasmo":"entusiasmo","ahuja":"aguja","vacelina":"vaselina","decider":"decidir","deserter":"desertar","opinions":"opiniones","future":"futuro","decisions":"decisiones","incomplete":"incompleta","utiliso":"utilizo","aqui":"aquí","despues":"después","depues":"después","tambien":"también","dia":"día","dias":"días","asi":"así","mas":"más","unico":"único","unica":"única","exitos":"éxitos","exito":"éxito","traia":"traía","podia":"podía","tenia":"tenía","habia":"había","sabia":"sabía","queria":"quería","estavа":"estaba","estava":"estaba","necesitava":"necesitaba","comence":"comencé","empece":"empecé","trabaje":"trabajé","estudie":"estudié","realice":"realicé","costee":"costeé","encontre":"encontré","tome":"tomé","mire":"miré","descubri":"descubrí","sali":"salí","llegue":"llegué","camine":"caminé","comi":"comí","perdi":"perdí","pense":"pensé","entendi":"entendí","aprendi":"aprendí","cambie":"cambié","reafirme":"reafirmé","confirme":"confirmé","sente":"senté","experimente":"experimenté","trate":"traté","busque":"busqué","termine":"terminé","cree":"creé","optica":"óptica","fisica":"física","fisicamente":"físicamente","emocionalmente":"emocionalmente","economicamente":"económicamente","financiara":"financiera","planeacion":"planeación","accion":"acción","conclusion":"conclusión","preparcion":"preparación","dibujo":"dibujo","paraja":"pareja","alberge":"albergue","pimeras":"primeras","pimer":"primer","necesiatmosa":"necesitamos a","cuantes":"cuántas","cuntas":"cuántas","empujoncio":"empujoncito","famila":"familia","escritos":"escrito","lines":"líneas","espirutual":"espiritual","econimico":"económico","caminio":"camino","cansancion":"cansancio","matafoicamente":"metafóricamente","mataforicamente":"metafóricamente","sombolismo":"simbolismo","resentemientos":"resentimientos","atezorar":"atesorar","emocinal":"emocional","dificial":"difícil","encorban":"encorvan","clabados":"clavados","sobervia":"soberbia","satifaccion":"satisfacción","pesamiento":"pensamiento","consinte":"consciente","ayudale":"ayudarle","necesrario":"necesario","consideAr":"considerar","ultilidad":"utilidad","anegdotas":"anécdotas","andegdotas":"anécdotas","reflecciones":"reflexiones","refleccion":"reflexión","promer":"primer","apredizajes":"aprendizajes","panoroma":"panorama","llagado":"llegado","detacando":"destacando","pergrinos":"peregrinos","sifnifico":"significó","aquiereren":"adquieren","oprtunidades":"oportunidades","oprtunidad":"oportunidad","batalles":"batallas","trancurrrian":"transcurrían","ocaciones":"ocasiones","continual":"continuar","nustra":"nuestra","nostros":"nosotros","solomente":"solamente","haste":"hasta","poruE":"por qué","hacelo":"hacerlo","adultes":"adultez","nadia":"nadie","poqure":"porqué","reuir":"rehuir","planera":"planear","alrrededor":"alrededor","precavido":"precavido","profesiona":"profesional","deformacion":"deformación","alleganos":"allegados","sobre todos":"sobre todo","cercan":"cercana"};
const DEMO_ACENTO_FIN = [[/cion$/,"ción"],[/sion$/,"sión"]];

function demoCorrige(p){
  const letras = p.replace(/[^A-Za-zÁÉÍÓÚÑÜáéíóúñü]/g,"");
  let t = p;
  // palabras: minúsculas si venían en mayúsculas sostenidas o raras (EstA)
  t = t.replace(/[A-Za-zÁÉÍÓÚÑÜáéíóúñü]+/g, w => {
    const raro = /[A-ZÁÉÍÓÚÑÜ]/.test(w.slice(1));
    let x = raro ? w.toLowerCase() : w;
    const bajo = x.toLowerCase();
    if (DEMO_TYPOS[bajo]) x = (x[0]===x[0].toUpperCase() && x[0]!==x[0].toLowerCase() && !raro) ? DEMO_TYPOS[bajo][0].toUpperCase()+DEMO_TYPOS[bajo].slice(1) : DEMO_TYPOS[bajo];
    else if (raro) { for (const [re,r] of DEMO_ACENTO_FIN) if (re.test(x)) x = x.replace(re, r); }
    if (raro && MAYUS_PROPIOS[x.toLowerCase()]) x = MAYUS_PROPIOS[x.toLowerCase()];
    return x;
  });
  t = t.replace(/\s+([,.;:!?])/g,"$1").replace(/¡\s+/g,"¡").replace(/¿\s+/g,"¿").replace(/\s*\?\?+/g,"?").replace(/\s*!!+/g,"!").replace(/¿¿/g,"¿").replace(/¡¡/g,"¡").replace(/,(?=\S)/g,", ").replace(/\s{2,}/g," ").trim();
  // mayúscula al inicio de oración
  t = t.replace(/(^|[.!?…]\s+|[¡¿“"«]\s*)([a-záéíóúñü])/g, (m,a,b)=>a+b.toUpperCase());
  return t;
}

let demoTurnoChat = 0;
async function demoResponder(prompt){
  await new Promise(r=>setTimeout(r, 900 + Math.random()*1300));
  const J = o => ({text: JSON.stringify(o), truncated:false});
  if (prompt.includes("entrega un diagnóstico")) return J(DEMO_DIAG);
  let m = prompt.match(/Edición de (FONDO|ESTILO) del capítulo (\d+)/);
  if (m){
    const etapa = m[1]==="FONDO" ? "fondo" : "estilo";
    const d = DEMO_NOTAS[m[2]]?.[etapa];
    if (d && d.sugerencias.length) return J(d);
    return J({comentario:"En la demostración, este capítulo no trae notas de ejemplo de esta etapa. Prueba con los Capítulos I y IV, o con la corrección, que funciona en todos.", sugerencias:[]});
  }
  if (prompt.includes("CORRECCIÓN ortotipográfica")){
    const sug = [];
    prompt.split("\n").forEach(l=>{
      const mm = l.match(/^\[C(\d+)¶(\d+)\] (.*)$/); if (!mm) return;
      const nuevo = demoCorrige(mm[3]);
      if (nuevo !== mm[3]) sug.push({p:+mm[2], tipo:"ortografía", original:mm[3], propuesta:nuevo, porque:"Mayúsculas sostenidas, acentos y erratas."});
    });
    return J({comentario:"", sugerencias:sug});
  }
  if (prompt.includes("UNA nota tuya")){
    const o = (prompt.match(/cambiar "([\s\S]*?)" por "/)||[])[1] || "";
    return J({respuesta:"Tienes razón: así lo dirías tú y eso vale más que una frase pulida. Te dejo una versión que conserva tu forma de decirlo y solo corrige la ortografía.", nueva_propuesta: o ? demoCorrige(o) : null, regla_nueva:"Conservar las expresiones propias del autor; el editor solo corrige ortografía y puntuación en ellas."});
  }
  if (prompt.includes("CONVERSACIÓN RECIENTE")){
    const cap = (prompt.match(/trabajando ahora el capítulo (\d+)/)||[])[1] || "1";
    demoTurnoChat++;
    const respuestas = [
      `Revisé el capítulo ${cap} contra el resto del libro. Lo que más se repite es el lema «cada quien camina su propio camino» (C1¶5, C5¶35, C5¶41). Mi sugerencia: que viva en el Capítulo I y regrese solo al final.`,
      `Buena observación. Lo anoto en tu hoja de estilo para que lo respete en todo el libro, y lo tomo en cuenta cuando revisemos el capítulo ${cap}.`,
      `En la versión completa leo tu pregunta y el capítulo en ese momento, y te dejo notas concretas en el margen. Esta demostración responde con ejemplos preparados.`
    ];
    return J({respuesta: respuestas[(demoTurnoChat-1)%3], regla_nueva: demoTurnoChat%3===2 ? "Los nombres de lugares de España se escriben como allá (Obradoiro, Cacabelos, Bierzo)." : null, sugerencias:[]});
  }
  if (prompt.includes("Ahora actúas como DISEÑADOR")) return J(DEMO_PORTADAS);
  return J({respuesta:"Listo.", sugerencias:[]});
}
