// Menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav ul").classList.toggle("active");
});

// Calculadora
function agregar(valor) {
  const display = document.getElementById("display");
  if (display.value === "0") {
    display.value = valor;
  } else {
    display.value += valor;
  }
}

function limpiar() {
  document.getElementById("display").value = "0";
}

function borrar() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1) || "0";
}

function operar(op) {
  const display = document.getElementById("display");
  const ultimo = display.value.slice(-1);
  if ("+-*/%".includes(ultimo)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function calcular() {
  try {
    const display = document.getElementById("display");
    display.value = eval(display.value);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Conversor
function convertir() {
  const monto = parseFloat(document.getElementById("monto").value);
  const moneda = document.getElementById("moneda").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(monto) || monto <= 0) {
    resultado.textContent = "Por favor ingresa un monto válido.";
    return;
  }

  let tasa = moneda === "usd" ? 0.0011 : 0.001;
  let simbolo = moneda === "usd" ? "USD" : "EUR";
  resultado.textContent = `Equivale a ${(monto * tasa).toFixed(2)} ${simbolo}`;
}

// Lightbox con flechas
let imagenes = Array.from(document.querySelectorAll('.galeria-simple img'));
let indiceActual = 0;

function abrirLightbox(imagen) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  indiceActual = imagenes.indexOf(imagen);
  lightboxImg.src = imagen.src;
  lightbox.style.display = 'flex';
}

function cerrarLightbox(e) {
  if (e.target.id === 'lightbox' || e.key === 'Escape') {
    document.getElementById('lightbox').style.display = 'none';
  }
}

function siguiente(e) {
  e.stopPropagation();
  indiceActual = (indiceActual + 1) % imagenes.length;
  document.getElementById('lightbox-img').src = imagenes[indiceActual].src;
}

function anterior(e) {
  e.stopPropagation();
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  document.getElementById('lightbox-img').src = imagenes[indiceActual].src;
}

document.addEventListener("keydown", cerrarLightbox);
