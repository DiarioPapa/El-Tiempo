let seccionActual = "";
let vozSeleccionada = null;
let ultimoBoton = null;

function seleccionarMejorVoz() {
  const voces = speechSynthesis.getVoices();
  vozSeleccionada =
    voces.find(v => v.lang === "es-CO") ||
    voces.find(v => v.lang.startsWith("es")) ||
    voces[0];
}

window.speechSynthesis.onvoiceschanged = seleccionarMejorVoz;

function hablar(texto, esNoticiaCompleta = false) {
  speechSynthesis.cancel();

  const mensaje = new SpeechSynthesisUtterance(texto);
  mensaje.voice = vozSeleccionada;
  mensaje.lang = "es-CO";
  mensaje.rate = 0.9;

  if (esNoticiaCompleta) {
    mensaje.onend = function() {

      setTimeout(function() {

        const aviso = new SpeechSynthesisUtterance(
          "Fin de esta noticia. Si desea escuchar otra noticia, pulse el botón volver."
        );

        aviso.voice = vozSeleccionada;
        aviso.lang = "es-CO";
        aviso.rate = 0.9;

        speechSynthesis.speak(aviso);

      }, 2000);

    };
  }

  speechSynthesis.speak(mensaje);
}

function limpiarConfirmaciones() {
  document.querySelectorAll("button").forEach(b => {
    b.classList.remove("confirmar");
  });
}

function cargarSecciones() {
  const contenedor = document.getElementById("botonesSecciones");
  contenedor.innerHTML = "";

  Object.keys(noticias).forEach(seccion => {
    const btn = document.createElement("button");
    btn.innerText = seccion.toUpperCase();

    btn.onclick = function() {

      if (ultimoBoton === btn) {
        limpiarConfirmaciones();
        ultimoBoton = null;
        mostrarSeccion(seccion);
      } else {
        limpiarConfirmaciones();
        btn.classList.add("confirmar");
        hablar(seccion);
        ultimoBoton = btn;
      }
    };

    contenedor.appendChild(btn);
  });
}

function mostrarSeccion(seccion) {
  seccionActual = seccion;

  document.getElementById("inicio").style.display = "none";
  document.getElementById("seccion").style.display = "block";
  document.getElementById("tituloSeccion").innerText = seccion.toUpperCase();

  const lista = document.getElementById("listaNoticias");
  lista.innerHTML = "";

  noticias[seccion].forEach((n) => {

    const btn = document.createElement("button");
    btn.innerText = n.titulo;

    btn.onclick = function() {

      if (ultimoBoton === btn) {
        limpiarConfirmaciones();
        ultimoBoton = null;
        hablar(n.texto, true);
      } else {
        limpiarConfirmaciones();
        btn.classList.add("confirmar");
        hablar(n.titulo);
        ultimoBoton = btn;
      }
    };

    lista.appendChild(btn);
  });
}

function volverInicio() {
  speechSynthesis.cancel();
  limpiarConfirmaciones();
  ultimoBoton = null;
  document.getElementById("seccion").style.display = "none";
  document.getElementById("inicio").style.display = "block";
}

cargarSecciones();
