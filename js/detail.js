export function parsePokemonId(event) {
    detail(event.target.id);
}

function detail(idPokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
    .then((response) => {
        return response.json();
    })
    .catch(error => console.error('Error:', error))
    .then(data => {
        let divList = document.getElementsByClassName("container-pokemon")[0];
        divList.innerHTML = '';

        let divPokemonContainerDetail = document.createElement("div");
        divPokemonContainerDetail.className = "container-pokemon__list-display";

        let divPokemonDetailed = document.createElement("div");
        divPokemonDetailed.className = "container-pokemon__pokemon";
        let pokemonName = document.createElement("h2");
        let textNodeNamePokemon = document.createTextNode(data.name);
        pokemonName.appendChild(textNodeNamePokemon);
        divPokemonContainerDetail.appendChild(pokemonName);

        let divPokemonTypes = document.createElement("div");
        divPokemonTypes.className = "container-pokemon__pokemon-types";
        let pokemonTypes = document.createElement("h3");
        let textPokemonTypes = document.createTextNode("Tipo(s) de " + data.name + ":")
        pokemonTypes.appendChild(textPokemonTypes);
        divPokemonDetailed.appendChild(pokemonTypes);

        let pokemonType;
        let textPokemonType;
        for (type in data.types) {
            pokemonType = document.createElement("p");
            textPokemonType = document.createTextNode(data.types[type].type.name);
            pokemonType.appendChild(textPokemonType);
            divPokemonTypes.append(pokemonType);
        }

        divPokemonDetailed.append(divPokemonTypes);
        divPokemonContainerDetail.append(divPokemonDetailed);
        divList.append(divPokemonContainerDetail);

        


    });
}