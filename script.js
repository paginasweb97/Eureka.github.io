
// script.js

// Puedes agregar funciones JS aquí si deseas
// Ejemplo: scroll suave al hacer clic en los enlaces del nav

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
