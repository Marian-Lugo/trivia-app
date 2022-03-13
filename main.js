import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(event){
  event.preventDefault();
  var categoria = document.getElementById("category").value;
  console.log(categoria);

  var dificultad = document.getElementById("difficulty").value;
  console.log(dificultad);

  var tipo = document.getElementById("type").value;
  console.log(tipo);
});