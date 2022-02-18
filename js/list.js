
export class Pokemon{
    constructor(id, name) {
        this.id = id;
        this.name = name;

        const image = document.createElement("img");
        image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
        this.image = image;
    }
}

export function list() {
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

        let divList = document.getElementsByClassName("container__list")[0];

        for(pokemon in pokedex) {
            let divPokemonListed = document.createElement("div");
            divPokemonListed.clasName = "container__pokemon";
            divPokemonListed.id = pokedex[pokemon].id;

            let textNodeNamePokemon = document.createTextNode(pokedex[pokemon].name);
            let namePokemonListed = document.createElement("h2");
            namePokemonListed.appendChild(textNodeNamePokemon);

            divPokemonListed.appendChild(namePokemonListed);

            divList.appendChild(divPokemonListed);
            divList.appendChild(pokedex[pokemon].image);

        }




    });
}