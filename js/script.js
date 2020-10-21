import { Anuncio_Auto } from "./anuncio.js";
import { actualizarLista } from "./tabla.js";
import { id, descripcion, frmAnuncio, puertas, transaccion, titulo, kms, potencia, precio , limpiarForm} from "./form.js";
import { obtenerAnuncios, obtenerId, guardarDatos } from "./localstorage.js";

window.addEventListener("load", inicializarManejadores);

let listaAnuncios;
let proximoId;
export let divTabla;

function inicializarManejadores() {
  listaAnuncios = obtenerAnuncios();
  proximoId = obtenerId();
  divTabla = document.getElementById("divTabla");
  actualizarLista(listaAnuncios);

  frmAnuncio.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevoAnuncio = obtenerAnuncio();
    if (nuevoAnuncio) {
      listaAnuncios.push(nuevoAnuncio);
      proximoId++;
      guardarDatos(listaAnuncios, proximoId);
      actualizarLista(listaAnuncios);
      limpiarForm();
    }
  });
}

function obtenerAnuncio() {
  const nuevoAnuncio = new Anuncio_Auto(
    proximoId,
    titulo.value,
    transaccion.value,
    descripcion.value, 
    precio.value,
    puertas.value,
    kms.value,
    potencia.value
  );

  return nuevoAnuncio;
}

btnBaja.addEventListener("click", (e) => {
  e.preventDefault();
  let idSelec = parseInt(id.value);
  let contador = 0;

  for (const anuncio of listaAnuncios) {
    if (anuncio.id == idSelec) {
      listaAnuncios.splice(contador, 1);
      guardarDatos(listaAnuncios, proximoId);
      actualizarLista(listaAnuncios);
      limpiarForm();
      break;
    }
    contador++;
  }
});

btnMod.addEventListener("click", (e) => {
  e.preventDefault();
  let idSelec = parseInt(id.value);
  let contador = 0;

  for (const anuncio of listaAnuncios) {
    if (anuncio.id == idSelec) {
      const nuevoAnuncio = new Anuncio_Auto(
        idSelec,
        titulo.value,
        transaccion.value,
        descripcion.value,
        precio.value,
        puertas.value,
        kms.value,
        potencia.value
      );
      listaAnuncios.splice(contador, 1, nuevoAnuncio);
      guardarDatos(listaAnuncios, proximoId);
      actualizarLista(listaAnuncios);
      limpiarForm();
      break;
    }
    contador++;
  }
});

btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  limpiarForm();
});
