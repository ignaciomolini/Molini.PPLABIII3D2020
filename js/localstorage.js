export function guardarDatos(listaAnuncios, proximoId) {
  localStorage.setItem("anuncios", JSON.stringify(listaAnuncios));
  localStorage.setItem("nextId", proximoId);
}

export function obtenerAnuncios() {
  return JSON.parse(localStorage.getItem("anuncios")) || [];
}

export function obtenerId() {
  return JSON.parse(localStorage.getItem("nextId")) || 1;
}
