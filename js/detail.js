
function detail(idPokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
    .then((response) => {
        return response.json();
    })
    .catch(error => console.error('Error:', error))
    .then(data => {
        let divList = document.getElementsByClassName("main-content__list")[0];
        mainContent.innerHTML = '';
    })
}