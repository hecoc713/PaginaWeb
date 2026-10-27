const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

function abrirMenu() {
  menu.classList.add("abierto");
  btnMenu.classList.add("abierto");
  btnMenu.setAttribute("aria-expanded", "true");
  btnMenu.setAttribute("aria-label", "Cerrar menú");
}

function cerrarMenu() {
  menu.classList.remove("abierto");
  btnMenu.classList.remove("abierto");
  btnMenu.setAttribute("aria-expanded", "false");
  btnMenu.setAttribute("aria-label", "Abrir menú");
}

// Clic en la hamburguesa: abre o cierra
btnMenu.addEventListener("click", () => {
  if (menu.classList.contains("abierto")) {
    cerrarMenu();
  } else {
    abrirMenu();
  }
});

menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) cerrarMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) cerrarMenu();
});

// ============================================================
// CONTADOR DEL CARRITO (se conectará con el carrito más adelante)
// Uso: actualizarContadorCarrito(3)  ->  "Carrito (3)"
// ============================================================
function actualizarContadorCarrito(cantidad) {
  document.getElementById("contador").textContent = cantidad;
}