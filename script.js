   function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("active");
    }


     let enlaceDestino = "";

    function solicitarClave(url) {
      enlaceDestino = url;
      document.getElementById('claveModal').style.display = 'block';
      document.getElementById('mensajeError').innerText = "";
      document.getElementById('claveInput').value = "";
    }

    function cerrarModal() {
      document.getElementById('claveModal').style.display = 'none';
    }

    function verificarClave() {
      const clave = document.getElementById('claveInput').value;
      const claveCorrecta = "2025"; // Cambia esta clave si quieres

      if (clave === claveCorrecta) {
        window.open(enlaceDestino, "_blank");
        cerrarModal();
      } else {
        document.getElementById('mensajeError').innerText = "❌ Clave incorrecta.";
      }
    }

    // Cierra el modal si haces clic fuera de él
    window.onclick = function(event) {
      const modal = document.getElementById('claveModal');
      if (event.target === modal) {
        cerrarModal();
      }
    }