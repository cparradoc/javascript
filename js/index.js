import {list, Pokemon} from './list.js';


window.onload = function () {
    setTimeout(addWelcomeMessage, 2000);
    addListeners();
}

function addWelcomeMessage () {
    var welcomeDiv = document.getElementById("welcome");
    var newContent = document.createTextNode("Bienvenidxs a la página de la Pokédex");
    welcomeDiv.appendChild(newContent);
}

//No he conseguido hacer una funcion para unificar todo asi que he hecho una por anuncio creado, pero dudo que sea lo mejor
//todo lo que me lo solucionaba era con jquery
function addListeners() {
    document.getElementById("anounce1").addEventListener("mouseover", onMouseOverAnounce1);
    document.getElementById("anounce2").addEventListener("mouseover", onMouseOverAnounce2);
    document.getElementById("anounce3").addEventListener("mouseover", onMouseOverAnounce3);

    document.getElementById("anounce1").addEventListener("mouseout", onMouseOutAnounce1);
    document.getElementById("anounce2").addEventListener("mouseout", onMouseOutAnounce2);
    document.getElementById("anounce3").addEventListener("mouseout", onMouseOutAnounce3);

    document.getElementById("anounce1").addEventListener("click", onMouseClickAnounce1);

    document.getElementsByClassName("header__button-list")[0].addEventListener("click", list);
  }

function onMouseOverAnounce1() {
    document.getElementById("anounce1").setAttribute("style", "background-color: #9aa09a");
 }

 function onMouseOutAnounce1() {
    document.getElementById("anounce1").setAttribute("style", "background-color: #f4f4f4");
 }

 function onMouseOverAnounce2() {
    document.getElementById("anounce2").setAttribute("style", "background-color: #9aa09a");
 }

 function onMouseOutAnounce2() {
    document.getElementById("anounce2").setAttribute("style", "background-color: #f4f4f4");
 }

 function onMouseOverAnounce3() {
    document.getElementById("anounce3").setAttribute("style", "background-color: #9aa09a");
 }

 function onMouseOutAnounce3() {
    document.getElementById("anounce3").setAttribute("style", "background-color: #f4f4f4");
 }

 function onMouseClickAnounce1() {
    document.getElementById("anounce1").setAttribute("style", "height: 100%");
 }