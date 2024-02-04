'use strict'

// js/script.js
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

// Tu código JavaScript personalizado va aquí

function cambiarEstilo() {
  var temaActual = document.documentElement.getAttribute('data-bs-theme')
  var nuevoTema = temaActual === 'light' ? 'dark' : 'light'

  document.documentElement.setAttribute('data-bs-theme', nuevoTema)
}
