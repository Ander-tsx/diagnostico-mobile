/* Catálogo compartido entre las vistas (Home, Productos, Detalle).
   Se expone en window.CATALOGO para poder consumirlo sin módulos. */
(function () {
  "use strict";

  const PRODUCTOS = [
    {
      id: 1,
      nombre: "Audífonos Inalámbricos",
      precio: 59.99,
      rating: 4,
      reseñas: 128,
      categoria: "Tecnología",
      imagen: "https://picsum.photos/seed/audifonos/600/600",
      descripcion:
        "Audífonos inalámbricos con cancelación de ruido, cómodos y con gran duración de batería. Ideales para música y llamadas."
    },
    {
      id: 2,
      nombre: "Smartwatch Pro",
      precio: 89.99,
      rating: 4,
      reseñas: 96,
      categoria: "Tecnología",
      imagen: "https://picsum.photos/seed/smartwatch/600/600",
      descripcion:
        "Reloj inteligente con monitor de ritmo cardíaco, GPS y notificaciones. Resistente al agua y batería de varios días."
    },
    {
      id: 3,
      nombre: "Cámara Digital",
      precio: 199.99,
      rating: 5,
      reseñas: 54,
      categoria: "Tecnología",
      imagen: "https://picsum.photos/seed/camara/600/600",
      descripcion:
        "Cámara digital compacta con sensor de alta resolución, zoom óptico y grabación de video en 4K."
    },
    {
      id: 4,
      nombre: "Mochila Urbana",
      precio: 39.99,
      rating: 4,
      reseñas: 210,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/seed/mochila/600/600",
      descripcion:
        "Mochila urbana resistente al agua con compartimento acolchado para laptop y múltiples bolsillos organizadores."
    },
    {
      id: 5,
      nombre: "Teclado Mecánico",
      precio: 74.99,
      rating: 5,
      reseñas: 143,
      categoria: "Tecnología",
      imagen: "https://picsum.photos/seed/teclado/600/600",
      descripcion:
        "Teclado mecánico retroiluminado con switches táctiles, estructura de aluminio y conexión USB-C desmontable."
    },
    {
      id: 6,
      nombre: "Lámpara de Escritorio",
      precio: 29.99,
      rating: 4,
      reseñas: 67,
      categoria: "Hogar",
      imagen: "https://picsum.photos/seed/lampara/600/600",
      descripcion:
        "Lámpara LED de escritorio con brazo articulado, tres temperaturas de color y control táctil de intensidad."
    },
    {
      id: 7,
      nombre: "Silla Ergonómica",
      precio: 149.99,
      rating: 4,
      reseñas: 88,
      categoria: "Hogar",
      imagen: "https://picsum.photos/seed/silla/600/600",
      descripcion:
        "Silla de oficina ergonómica con soporte lumbar ajustable, reposabrazos 3D y malla transpirable."
    },
    {
      id: 8,
      nombre: "Altavoz Bluetooth",
      precio: 45.99,
      rating: 4,
      reseñas: 175,
      categoria: "Tecnología",
      imagen: "https://picsum.photos/seed/altavoz/600/600",
      descripcion:
        "Altavoz portátil Bluetooth con sonido envolvente, resistencia IPX7 y hasta 20 horas de reproducción."
    },
    {
      id: 9,
      nombre: "Botella Térmica",
      precio: 19.99,
      rating: 5,
      reseñas: 302,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/seed/botella/600/600",
      descripcion:
        "Botella térmica de acero inoxidable que mantiene la temperatura hasta 12 horas. Libre de BPA."
    },
    {
      id: 10,
      nombre: "Mouse Inalámbrico",
      precio: 24.99,
      rating: 4,
      reseñas: 119,
      categoria: "Tecnología",
      imagen: "https://picsum.photos/seed/mouse/600/600",
      descripcion:
        "Mouse inalámbrico silencioso con sensor óptico de precisión, diseño ergonómico y batería de larga duración."
    },
    {
      id: 11,
      nombre: "Set de Sartenes",
      precio: 89.99,
      rating: 4,
      reseñas: 61,
      categoria: "Hogar",
      imagen: "https://picsum.photos/seed/sartenes/600/600",
      descripcion:
        "Juego de sartenes antiadherentes aptas para inducción, con mango ergonómico y base reforzada."
    },
    {
      id: 12,
      nombre: "Gafas de Sol",
      precio: 34.99,
      rating: 4,
      reseñas: 154,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/seed/gafas/600/600",
      descripcion:
        "Gafas de sol con protección UV400, lentes polarizadas y montura ligera de acetato."
    }
  ];

  const CATEGORIAS = [
    { nombre: "Tecnología", imagen: "https://picsum.photos/seed/cat-tecnologia/300/300" },
    { nombre: "Hogar", imagen: "https://picsum.photos/seed/cat-hogar/300/300" },
    { nombre: "Accesorios", imagen: "https://picsum.photos/seed/cat-accesorios/300/300" }
  ];

  window.CATALOGO = {
    productos: PRODUCTOS,
    categorias: CATEGORIAS,
    porId: function (id) {
      return PRODUCTOS.find(function (p) { return p.id === Number(id); }) || null;
    },
    formatoPrecio: function (valor) {
      return "$" + Number(valor).toFixed(2);
    },
    estrellas: function (rating) {
      const llenas = Math.round(rating);
      return "★★★★★☆☆☆☆☆".slice(5 - llenas, 10 - llenas);
    }
  };
})();
