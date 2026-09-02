/* Vista Detalle: carga el producto según ?id= y maneja el selector de cantidad. */
(function () {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = window.CATALOGO.porId(id) || window.CATALOGO.productos[0];

  document.getElementById("bcNombre").textContent = p.nombre;
  document.getElementById("prodImg").src = p.imagen;
  document.getElementById("prodImg").alt = p.nombre;
  document.getElementById("prodNombre").textContent = p.nombre;
  document.getElementById("prodPrecio").textContent = window.CATALOGO.formatoPrecio(p.precio);
  document.getElementById("prodEstrellas").textContent = window.CATALOGO.estrellas(p.rating);
  document.getElementById("prodResenas").textContent = p.reseñas;
  document.getElementById("prodResumen").textContent = p.descripcion;
  document.getElementById("prodDescripcion").textContent = p.descripcion;

  const cantidad = document.getElementById("cantidad");

  function leer() {
    const n = parseInt(cantidad.value, 10);
    return Number.isFinite(n) && n > 0 ? n : 1;
  }

  document.getElementById("menos").addEventListener("click", function () {
    cantidad.value = Math.max(1, leer() - 1);
  });
  document.getElementById("mas").addEventListener("click", function () {
    cantidad.value = leer() + 1;
  });
  document.getElementById("agregar").addEventListener("click", function () {
    document.getElementById("aviso").hidden = false;
  });
})();
