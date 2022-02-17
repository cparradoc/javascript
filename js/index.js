
window.onload = function () {
    setTimeout(addWelcomeMessage, 2000);
}

function addWelcomeMessage () {
    var welcomeDiv = document.getElementById("welcome");
    var newContent = document.createTextNode("Bienvenidxs a la página de la Pokédex");
    welcomeDiv.appendChild(newContent);
}