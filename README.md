# Plantilla E-commerce con Simulación de Ticket por WhatsApp

Plantilla web moderna, responsiva y modular para tiendas en línea donde la compra y el contacto se formalizan a través de WhatsApp.

## 🌐 Despliegue en GitHub Pages

Para publicar tu página web en GitHub Pages de forma gratuita:

### Opción A (Recomendada y más rápida): Desde la rama `main`
1. Sube los cambios a tu repositorio en GitHub:
   ```bash
   git add .
   git commit -m "Estructurar archivos para despliegue en GitHub Pages"
   git push origin main
   ```
2. Ve a tu repositorio en GitHub: `https://github.com/hecoc713/PaginaWeb`.
3. Haz clic en la pestaña **Settings** (Configuración) arriba a la derecha.
4. En el menú lateral izquierdo, haz clic en **Pages** (en la sección *Code and automation*).
5. En **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` y en la carpeta elige `/ (root)`.
   - Haz clic en **Save** (Guardar).
6. En un par de minutos, tu sitio web estará activo en:
   👉 **`https://hecoc713.github.io/PaginaWeb/`**

### Opción B: Mediante GitHub Actions
El repositorio ya incluye el flujo automatizado en `.github/workflows/deploy.yml`. Solo debes ir a **Settings** -> **Pages** -> en **Source** elegir **GitHub Actions**.

---

## 📁 Estructura del Proyecto

- **`index.html`**: Página principal del sitio:
  - Header con logo, enlace a la tienda, botón de carrito con contador dinámico y buscador interactivo.
  - Al hacer clic en la barra de búsqueda, ésta se expande suavemente y despliega un menú flotante con las categorías disponibles.
  - Carrusel interactivo automático y manual con productos sugeridos / más vendidos.
  - Sección **"¿Quiénes somos?"** con la historia, pilares de confianza y propuesta de valor de la marca.
- **`tienda.html`**: Catálogo de productos y resultados de búsqueda:
  - Conectado con la búsqueda y filtros de categoría de la página principal.
  - La barra de búsqueda superior en esta página permite buscar y filtrar de forma directa sin expandir el menú de categorías.
  - Barra de botones/chips para filtrar por categoría con un solo clic y contador de resultados en vivo.
- **`producto.html`**: Ficha técnica y detalle del producto:
  - Carga dinámica del producto por ID (`?id=X`).
  - Galería con visor de imagen principal y miniaturas interactivas para cambiar de toma.
  - Descripción, selector de cantidad, precio y precio de descuento.
  - **Botón "Comprar Ahora (Ticket WhatsApp)"**: Simula la compra y abre un pop-up con diseño de ticket/recibo que confirma el envío del ticket por WhatsApp.
  - Botón para agregar al carrito.
- **`carrito.html`**: Página completa de revisión del carrito:
  - Tabla de productos agregados, ajuste de cantidades, eliminación y resumen de totales.
  - Botón para simular la compra de toda la orden y generar el ticket para WhatsApp.
- **`productos.js`**: Base de datos centralizada y modular en JavaScript. Permite modificar fácilmente los productos, categorías, imágenes, precios y descripciones para cualquier tipo de negocio.
- **`style.css`**: Hoja de estilos con variables CSS, tipografías modernas (*Anton* y *Space Grotesk*), drawer lateral offcanvas, pop-up de ticket y diseño 100% responsivo para móvil, tablet y escritorio.
- **`script.js`**: Lógica de interacción (carrusel con autoplay, buscador expandible, filtrado en tiempo real, persistencia del carrito con `localStorage`, drawer lateral y generador de tickets).
- **`.nojekyll`**: Archivo que desactiva el procesamiento de Jekyll en GitHub Pages para servir los archivos HTML, CSS y JS planos sin demoras ni omisiones.

---

## 🚀 Cómo utilizar y personalizar la plantilla

1. **Abrir en el navegador:**
   - Puedes abrir directamente [`index.html`](file:///c:/Users/jonat/Documents/GitHub/PaginaWeb/index.html) en cualquier navegador (Chrome, Edge, Firefox, Safari) o mediante una extensión como *Live Server*.
2. **Modificar productos:**
   - Abre [`productos.js`](file:///c:/Users/jonat/Documents/GitHub/PaginaWeb/productos.js) y edita el arreglo `PRODUCTOS` para añadir tus propios artículos, imágenes, precios y categorías.
3. **Conectar WhatsApp real en el futuro:**
   - En [`script.js`](file:///c:/Users/jonat/Documents/GitHub/PaginaWeb/script.js), dentro de la función `mostrarTicketModal`, puedes reemplazar el comportamiento simulado por un enlace directo hacia la API de WhatsApp:
     ```javascript
     const mensaje = encodeURIComponent(`Hola, quiero confirmar mi pedido ${ticketId}:\n${resumen}\nTotal: $${total}`);
     window.open(`https://wa.me/TUNUMERODETELEFONO?text=${mensaje}`, '_blank');
     ```
