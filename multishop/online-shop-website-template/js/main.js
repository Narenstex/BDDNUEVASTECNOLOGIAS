// DIEGO GARCIA: Función para mostrar/ocultar resumen
function toggleResumen(id) {
  const elem = document.getElementById(id);
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

// DIEGO GARCIA: Función para filtrar artículos por palabra clave
function filtrarPorKeyword() {
  const input = document.getElementById('buscador').value.toLowerCase();
  const articulos = document.getElementsByClassName('articulo');
  let count = 0;

  for (let i = 0; i < articulos.length; i++) {
    const texto = articulos[i].innerText.toLowerCase();
    if (texto.includes(input)) {
      articulos[i].style.display = "block";
      count++;
    } else {
      articulos[i].style.display = "none";
    }
  }
  document.getElementById("contador").innerText = `Artículos visibles: ${count}`;
}

// DIEGO GARCIA: Función para contar artículos al cargar la página
function contarArticulos() {
  const articulos = document.getElementsByClassName('articulo').length;
  document.getElementById("contador").innerText = `Artículos visibles: ${articulos}`;
}
// Función de Naren: Ordenar artículos alfabéticamente
function ordenarArticulos() {
  let lista = document.querySelectorAll(".articulo");
  let contenedor = document.getElementById("articulos");
  let articulosArray = Array.from(lista);

  articulosArray.sort((a, b) => a.innerText.localeCompare(b.innerText));
  articulosArray.forEach(a => contenedor.appendChild(a));
}

// Función de Naren: Contar resúmenes visibles
function contarResumidos() {
  let visibles = document.querySelectorAll("p[id^='resumen']:not([style*='display:none'])").length;
  alert("Hay " + visibles + " resúmenes abiertos.");
}

// Función de Naren: Resaltar palabra clave
function resaltarPalabra() {
  let palabra = document.getElementById("buscador").value;
  let articulos = document.querySelectorAll(".articulo p, .articulo h3");

  articulos.forEach(p => {
    p.innerHTML = p.textContent.replace(new RegExp(palabra, "gi"), match => `<mark>${match}</mark>`);
  });
}

window.onload = contarArticulos;
