/* Vista Productos: renderiza el catálogo con búsqueda y paginación básica. */
(function () {
  "use strict";

  const POR_PAGINA = 4;
  const contenedor = document.getElementById("productContainer");
  const paginacion = document.getElementById("pagination");
  const input = document.getElementById("searchInput");
  const btnFiltrar = document.getElementById("filterBtn");

  let termino = "";
  let pagina = 1;

  function filtrados() {
    const t = termino.trim().toLowerCase();
    return window.CATALOGO.productos.filter(function (p) {
      return p.nombre.toLowerCase().indexOf(t) !== -1;
    });
  }

  function pintarProductos(lista) {
    const inicio = (pagina - 1) * POR_PAGINA;
    const page = lista.slice(inicio, inicio + POR_PAGINA);

    if (page.length === 0) {
      contenedor.innerHTML = "<p>No se encontraron productos.</p>";
      return;
    }

    contenedor.innerHTML = page
      .map(function (p) {
        return (
          '<div class="col-md-6 product-card">' +
          '<a href="detalle.html?id=' + p.id + '">' +
          '<img class="prod-img" src="' + p.imagen + '" alt="' + p.nombre + '">' +
          "</a>" +
          "<p>" + p.nombre + "</p>" +
          "<p>" + window.CATALOGO.formatoPrecio(p.precio) + "</p>" +
          "<p>" + window.CATALOGO.estrellas(p.rating) + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  function pintarPaginacion(lista) {
    const total = Math.ceil(lista.length / POR_PAGINA) || 1;
    let html = "";
    for (let i = 1; i <= total; i++) {
      html +=
        '<li class="page-item ' + (i === pagina ? "active" : "") + '">' +
        '<button class="page-link" data-pagina="' + i + '">' + i + "</button>" +
        "</li>";
    }
    paginacion.innerHTML = html;
  }

  function render() {
    const lista = filtrados();
    const totalPaginas = Math.ceil(lista.length / POR_PAGINA) || 1;
    if (pagina > totalPaginas) pagina = 1;
    pintarProductos(lista);
    pintarPaginacion(lista);
  }

  function buscar() {
    termino = input.value;
    pagina = 1;
    render();
  }

  btnFiltrar.addEventListener("click", buscar);
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") buscar();
  });
  paginacion.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-pagina]");
    if (!btn) return;
    pagina = Number(btn.dataset.pagina);
    render();
  });

  render();
})();
