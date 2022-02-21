
function detail(idPokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
    .then((response) => {
        return response.json();
    })
    .catch(error => console.error('Error:', error))
    .then(data => {
        let divList = document.getElementsByClassName("container-pokemon")[0];
        divList.innerHTML = '';

        let divPokemonConteinerDetail = document.createElement("div");
        divPokemonConteinerDetail.className = "container-pokemon__list-display";

        let divPokemonDetailed = document.createElement("div");
        divPokemonDetailed.className = "container-pokemon__pokemon";
        let pokemonName = document.createElement("h2");
        let textNodeNamePokemon = document.createTextNode(pokedex[pokemon].name);
        pokemonName.appendChild(textNodeNamePokemon);
        divPokemonConteinerDetail.appendChild(pokemonName);

        
        


    })
}