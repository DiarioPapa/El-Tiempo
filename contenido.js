const noticias = {

  portada: [
    {
      titulo: "Título aquí",
      texto: `Primer párrafo aquí.

Segundo párrafo aquí.

Tercer párrafo aquí.`
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
