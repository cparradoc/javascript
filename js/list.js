import {parsePokemonId} from './detail.js';

export class Pokemon{
    constructor(id, name) {
        this.id = id;
        this.name = name;

        const image = document.createElement("img");
        image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png";
        image.id = this.id;
        this.image = image;
    }
}

export function list() {
    let welcomeDiv = document.getElementById("welcome");
    welcomeDiv.innerHTML = '';
    
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .catch(error => console.error('Error:', error))
    .then(data => {
        console.log(data);
        let pokedex = [];

        for(var pokemon in data.results) {
            var idPokemon = data.results[pokemon].url.split('/');
            pokemon = new Pokemon(idPokemon[idPokemon.length - 2], data.results[pokemon].name);
            pokedex.push(pokemon);
        }

        let divDetail = document.getElementsByClassName("container-pokemon__list-detail")[0];
        if(divDetail)
            divDetail.innerHTML = '';
        let divList = document.getElementsByClassName("container-pokemon__list-display")[0];

        for(pokemon in pokedex) {
            let divPokemonListed = document.createElement("div");
            divPokemonListed.className = "container-pokemon__pokemon";
            divPokemonListed.id = pokedex[pokemon].id;
            divPokemonListed.onclick = parsePokemonId;

            let textNodeNamePokemon = document.createTextNode(pokedex[pokemon].name);
            let namePokemonListed = document.createElement("h2");
            namePokemonListed.id = pokedex[pokemon].id;
            namePokemonListed.appendChild(textNodeNamePokemon);

            divPokemonListed.appendChild(namePokemonListed);
            divPokemonListed.appendChild(pokedex[pokemon].image);
            divList.appendChild(divPokemonListed);

        }

        let listButton = document.getElementsByClassName("header__button-list")[0];
        listButton.style.visibility = 'hidden';

    });
}