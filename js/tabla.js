import {divTabla} from "./script.js";
import {lblId, id, btnBaja, btnMod, llenarForm, limpiarForm} from "./form.js";

function crearTabla(lista) {
  const tabla = document.createElement("table");

  tabla.appendChild(crearCabecera(lista[0]));
  tabla.appendChild(crearCuerpo(lista));

  return tabla;
}

function crearCabecera(item) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  for (const key in item) {
    const th = document.createElement("th");
    const texto = document.createTextNode(key);

    th.appendChild(texto);
    tr.appendChild(th);
  }
  thead.appendChild(tr);

  return thead;
}

function crearCuerpo(lista) {
  const tbody = document.createElement("tbody");

  lista.forEach((element) => {
    const tr = document.createElement("tr");

    for (const key in element) {
      const td = document.createElement("td");
      const texto = document.createTextNode(element[key]);

      td.appendChild(texto);
      tr.appendChild(td);
    }
    if (element.hasOwnProperty("id")) {
      tr.setAttribute("data-id", element["id"]);
    }
    agregarManejadorTR(tr, lista);
    tbody.appendChild(tr);
  });

  return tbody;
}

function agregarManejadorTR(tr, lista) {
  let idAnuncioSelec;

  if (tr) {
    tr.addEventListener("click", function (e) {
      e.preventDefault();
      idAnuncioSelec = parseInt(e.target.parentNode.dataset.id);
      llenarForm(lista, idAnuncioSelec);
      lblId.classList.remove("ocultar");
      id.classList.remove("ocultar");
      btnBaja.classList.remove("ocultar");
      btnMod.classList.remove("ocultar");
      btnAlta.classList.add("ocultar");
    });
  }
}

export function actualizarLista(listaPersonas) {

  while (divTabla.firstChild) {
    divTabla.removeChild(divTabla.lastChild);
  }

  divTabla.appendChild(preloader());
  limpiarForm();

  setTimeout(() => {

    while (divTabla.firstChild) {
      divTabla.removeChild(divTabla.lastChild);
    }

    divTabla.appendChild(crearTabla(listaPersonas));
  }, 3000);
}

function preloader() {
  const spinner  = document.createElement("img");
  spinner.src = "./image/spinner.gif";
  return spinner;
}


