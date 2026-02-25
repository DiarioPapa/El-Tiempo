const noticias = {

  "primera plana": [
    {
      titulo: "Renunció Tarek William Saab, fiscal general del régimen de Venezuela; defensor del pueblo, Alfredo Ruiz, también saldrá del cargo: esto se sabe",
      texto: `Ambos funcionarios enviaron su carta de renuncia a la Asamblea Nacional. 

El fiscal general de Venezuela, Tarek William Saab, y el defensor del Pueblo, Alfredo Ruiz, remitieron este miércoles, 25 de febrero, su carta de renuncia a la Asamblea Nacional, controlada por el chavismo.

La información fue confirmada por Jorge Rodríguez, presidente de la Asamblea Nacional, quien aseguró que en efecto recibieron las misivas de ambos funcionarios 'expresando su decisión de renunciar al cargo de fiscal general y defensor del pueblo'.

De acuerdo con Rodríguez, se designará un comité de selección para elegir a los nuevos funcionarios y, mientras tanto, se elegirá a un fiscal encargado.

'El procedimiento tradicional es que quien ostente el cargo como vicefiscal asume de manera temporal hasta tanto se dé el procedimiento establecido. Resulta que no hay una vicefiscal (...) vamos a proceder a escoger a una encargada o encargado para ambos cargos mientras se activa el comité de postulación', afirmó.

¿Quién es Tarek William Saab?

Saab llegó a la Fiscalía en 2017 por designación de la Asamblea Nacional Constituyente y está sancionado por Estados Unidos desde ese mismo año en medio de cuestionamientos por violaciones de derechos humanos en el país caribeño.

El ahora exfiscal es considerado uno de los más cercanos colaboradores de la llamada 'Revolución Bolivariana' y sus detractores lo acusan de servir al chavismo.

Estando al frente del Ministerio Público, fue señalado de abrir investigaciones contra cientos de opositores, periodistas y activistas, con casos emblemáticos como los líderes opositores María Corina Machado y Edmundo González.

Además, organismos internacionales, entre ellos Human Rights Watch y Amnistía Internacional, han documentado detenciones arbitrarias, torturas y el uso del sistema penal como herramienta de represión, con al menos 18 muertes en custodia registradas durante su gestión.

Tras la captura de Nicolás Maduro el pasado 3 de enero, Saab abogó por el regreso del líder chavista y condenó la incursión de Washington como ilegal y violatoria del derecho internacional.

En el proceso de transición iniciado en Venezuela tras la salida de Maduro —que implicó el cierre de El Helicoide, la aplicación de una ley de amnistía y la liberación de centenares de presos políticos—, el control de Tarek William Saab en la Fiscalía General de la República suponía para varios defensores de derechos humanos y líderes de la oposición la continuidad de la estructura de represión y persecución del régimen venezolano.

El viernes, no obstante, el ahora exfiscal había considerado que la Ley de Amnistía aprobada por el Parlamento cerraba 'un importante ciclo histórico' en Venezuela.

'Yo diría que la aprobación de la Ley de Amnistía cierra un importante ciclo histórico que es el de sanar heridas, obviamente producto de la disputa y los conflictos, más allá de lo que la propia Ley va narrando', afirmó el funcionario entonces, según una nota de prensa difundida por la Fiscalía.`
    }
  ],

  politica: [
    {
      titulo: "Título aquí",
      texto: `Texto aquí.

Segundo párrafo.`
    }
  ]

};
function mostrarFechaActual() {
    const fecha = new Date();

    const dias = [
        "Domingo", "Lunes", "Martes", "Miércoles",
        "Jueves", "Viernes", "Sábado"
    ];

    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    const textoFecha = `${diaSemana} ${dia} de ${mes} de ${año}`;

    document.getElementById("fecha-actual").innerText = textoFecha;
}

mostrarFechaActual();
