function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

let enlaceDestino = "";

function solicitarClave(url) {
  enlaceDestino = url;
  document.getElementById("claveModal").style.display = "block";
  document.getElementById("mensajeError").innerText = "";
  document.getElementById("claveInput").value = "";
}

function cerrarModal() {
  document.getElementById("claveModal").style.display = "none";
}

function verificarClave() {
  const clave = document.getElementById("claveInput").value;
  const claveCorrecta = "2025"; // Cambia esta clave si quieres

  if (clave === claveCorrecta) {
    window.open(enlaceDestino, "_blank");
    cerrarModal();
  } else {
    document.getElementById("mensajeError").innerText = "❌ Clave incorrecta.";
  }
}

// Cierra el modal si haces clic fuera de él
window.onclick = function (event) {
  const modal = document.getElementById("claveModal");
  if (event.target === modal) {
    cerrarModal();
  }
};

// Abrir imagen en pantalla completa
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

// Selecciona todas las imágenes de la galería
const galeriaImgs = document.querySelectorAll(".galeria img");

galeriaImgs.forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
}

// También cerrar si se hace clic fuera de la imagen
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
