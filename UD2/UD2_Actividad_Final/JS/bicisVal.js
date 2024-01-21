'use strict'

document.addEventListener('DOMContentLoaded', function () {
  // Al cargar la página, verificar si hay una cookie de estilo y aplicarla
  console.log('Ok')
  var estiloCookie = getCookie('estilo')
  if (estiloCookie) {
    var cuerpo = document.body
    var enlaceCSS = document.getElementById('estilo-css')
    enlaceCSS.href = './CSS/' + estiloCookie + '.css'
    cuerpo.setAttribute('data-estilo', estiloCookie)
  }
})

function cambiarEstilo() {
  var cuerpo = document.body
  var enlaceCSS = document.getElementById('estilo-css')

  console.log(cuerpo)
  console.log(enlaceCSS)

  // Cambiar la referencia al archivo CSS
  if (cuerpo.getAttribute('data-estilo') === 'bicisVal') {
    enlaceCSS.href = './CSS/bicisVal_DarkMode.css'
    cuerpo.setAttribute('data-estilo', 'bicisVal_DarkMode')
    // Guardar la elección en una cookie con un tiempo de expiración de 1 día
    document.cookie =
      'estilo=bicisVal_DarkMode; expires=' +
      new Date(Date.now() + 86400000).toUTCString()
  } else {
    enlaceCSS.href = './CSS/bicisVal.css'
    cuerpo.setAttribute('data-estilo', 'bicisVal')
    document.cookie =
      'estilo=bicisVal; expires=' +
      new Date(Date.now() + 86400000).toUTCString()
  }
}

// Función para obtener el valor de una cookie por nombre
function getCookie(nombre) {
  var nombreEQ = nombre + '='
  var cookies = document.cookie.split(';')
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length)
    if (cookie.indexOf(nombreEQ) === 0)
      return cookie.substring(nombreEQ.length, cookie.length)
  }
  return null
}
