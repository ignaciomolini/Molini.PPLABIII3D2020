export const frmAnuncio = document.forms[0];
export const id = document.getElementById("txtId");
export const lblId = document.getElementById("lblId");
export const titulo = document.getElementById("txtTitulo");
export const transaccion = frmAnuncio.transaccion;
export const descripcion = document.getElementById("txtDescrip");
export const precio = document.getElementById("txtPrecio");
export const puertas = document.getElementById("txtPuertas");
export const kms = document.getElementById("txtKms");
export const potencia = document.getElementById("txtPotencia");
export const btnAlta = document.getElementById("btnAlta");
export const btnBaja = document.getElementById("btnBaja");
export const btnMod = document.getElementById("btnMod");
export const btnCancel = document.getElementById("btnCancel");

export function limpiarForm() {
  titulo.value = "";
  transaccion.value = "Venta";
  descripcion.value = "";
  precio.value = "";
  puertas.value = "";
  kms.value = "";
  potencia.value = "";
  lblId.classList.add("ocultar");
  id.classList.add("ocultar");
  btnBaja.classList.add("ocultar");
  btnMod.classList.add("ocultar");
  btnAlta.classList.remove("ocultar");
}

export function llenarForm(lista, idSelec) {
  for (const anuncio of lista) {
    if (anuncio.id == idSelec) {
      id.value = anuncio.id;
      titulo.value = anuncio.titulo;
      transaccion.value = anuncio.transaccion;
      descripcion.value = anuncio.descripcion;
      precio.value = anuncio.precio;
      puertas.value = anuncio.puertas;
      kms.value = anuncio.kms;
      potencia.value = anuncio.potencia;
      break;
    }
  }
}
