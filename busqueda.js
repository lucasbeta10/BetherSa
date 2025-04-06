document.getElementById('buscador').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const productos = document.querySelectorAll('.producto');
  
    productos.forEach(producto => {
      const texto = producto.textContent.toLowerCase();
      producto.style.display = texto.includes(query) ? 'block' : 'none';
    });
  });
  