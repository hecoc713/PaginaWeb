// ============================================================
// CATÁLOGO DE PRODUCTOS - PLANTILLA E-COMMERCE
// Estructura modular: fácil de reemplazar o conectar a una API/BD
// ============================================================

const CATEGORIAS = [
  "Ropa Urbana",
  "Calzado",
  "Accesorios",
  "Tecnología",
  "Colección Especial"
];

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Camiseta Oversize Minimalist",
    categoria: "Ropa Urbana",
    precio: 29.99,
    precioAnterior: 39.99,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Camiseta de corte oversized en algodón 100% peinado de alto gramaje.",
    descripcionLarga: "Confeccionada con algodón de 240g, esta camiseta ofrece una silueta moderna y relajada sin perder estructura. Cuello acanalado reforzado y costuras dobles para máxima durabilidad en el uso diario. Perfecta para cualquier temporada."
  },
  {
    id: 2,
    nombre: "Sudadera Hoodie Dark Edition",
    categoria: "Ropa Urbana",
    precio: 54.99,
    precioAnterior: 69.99,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Sudadera con capucha premium, interior afelpado térmico y bolsillo canguro.",
    descripcionLarga: "El hoodie definitivo para el frío urbano. Interior perchado ultra suave, capucha con cordones ajustables metálicos y puños elásticos resistentes. Un básico versátil que no puede faltar en tu guardarropa."
  },
  {
    id: 3,
    nombre: "Sneakers Retro Classic 90s",
    categoria: "Calzado",
    precio: 89.99,
    precioAnterior: 109.99,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Zapatillas deportivas de estética retro con suela de tracción y amortiguación avanzada.",
    descripcionLarga: "Inspiradas en las siluetas icónicas de los años 90. Cuentan con soporte de tobillo acolchado, plantilla anatómica viscoelástica y suela de caucho vulcanizado antideslizante para confort durante todo el día."
  },
  {
    id: 4,
    nombre: "Gorra Snapback Vintage Estructurada",
    categoria: "Accesorios",
    precio: 22.50,
    precioAnterior: 28.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Gorra con visera plana, panel frontal rígido y cierre ajustable.",
    descripcionLarga: "Fabricada con mezcla de lana y acrílico de alta resistencia. Ojales bordados para ventilación y banda interior absorbente de sudor. Ajuste universal snapback."
  },
  {
    id: 5,
    nombre: "Mochila Modular Waterproof",
    categoria: "Accesorios",
    precio: 65.00,
    precioAnterior: 79.99,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Mochila impermeable de 25L con compartimento acolchado para laptop de hasta 16\".",
    descripcionLarga: "Diseñada para la movilidad diaria. Tejido exterior de nylon balístico resistente al agua, cremalleras selladas YKK y espaldar ergonómico con malla transpirable. Cuenta con múltiples bolsillos organizadores."
  },
  {
    id: 6,
    nombre: "Audífonos Inalámbricos Bass Pro",
    categoria: "Tecnología",
    precio: 79.99,
    precioAnterior: 99.99,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Cancelación activa de ruido, Bluetooth 5.3 y batería de hasta 40 horas.",
    descripcionLarga: "Sonido de alta resolución con transductores de 40mm. Modos de audio ambiental y cancelación de ruido profunda. Carga ultra rápida vía USB-C: 10 minutos de carga brindan 4 horas de reproducción."
  },
  {
    id: 7,
    nombre: "Smartwatch Deportivo Apex Fit",
    categoria: "Tecnología",
    precio: 119.00,
    precioAnterior: 149.00,
    destacado: false,
    imagenes: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Monitor de ritmo cardíaco, resistencia al agua IP68 y pantalla AMOLED.",
    descripcionLarga: "Tu compañero de entrenamiento inteligente. Registro de más de 30 deportes, monitoreo continuo de sueño y oxígeno en sangre, notificaciones sincronizadas y batería para 10 días."
  },
  {
    id: 8,
    nombre: "Chaqueta Cortavientos Technical Utility",
    categoria: "Colección Especial",
    precio: 95.00,
    precioAnterior: 120.00,
    destacado: true,
    imagenes: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    descripcionCorta: "Chaqueta ligera con membrana repelente al agua y detalles reflectantes 3M.",
    descripcionLarga: "Estilo técnico futurista combinado con máxima practicidad. Bolsillos frontales modulares con cremallera, capucha ajustable oculta en el cuello y ajuste ceñido en cintura y puños."
  }
];

// Funciones auxiliares para obtener productos
function obtenerProductoPorId(id) {
  return PRODUCTOS.find(p => p.id === parseInt(id, 10)) || null;
}

function filtrarProductos({ termino = "", categoria = "" }) {
  let resultados = PRODUCTOS;

  if (categoria && categoria.trim() !== "" && categoria !== "Todas") {
    resultados = resultados.filter(p => 
      p.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  if (termino && termino.trim() !== "") {
    const query = termino.toLowerCase().trim();
    resultados = resultados.filter(p => 
      p.nombre.toLowerCase().includes(query) ||
      p.categoria.toLowerCase().includes(query) ||
      p.descripcionCorta.toLowerCase().includes(query)
    );
  }

  return resultados;
}

function formatearMoneda(monto) {
  return `$${monto.toFixed(2)}`;
}
