class Pokemon{
    constructor(id, name) {
        this.id = id;
        this.name = name;

        const image = document.createElement("img");
        image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
        this.image = image;


    }
}


fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .catch(error => console.error('Error:', error))
    .then(data => {
        console.log(data);
    });

function list() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .catch(error => console.error('Error:', error))
    .then(data => {
        console.log(data);
        let pokedex = [];

        for(pokemon in data.results) {
            idPokemon = data.results[pokemon].url.split('/');
            pokemon = new Pokemon(idPokemon[idPokemon.length - 2], data.results[pokemon].name);
            pokedex.push(pokemon);
        }
        console.log(pokedex);

        let divList = document.getElementsByClassName("container")[1];

        for(pokemon in pokedex) {
            divPokemonListed = document.createElement("div");
            divPokemonListed.clasName = "container__pokemon";
            divPokemonListed.id = pokedex[pokemon].id;

            textNodeNamePokemon = document.createTextNode(pokedex[pokemon].name);
            namePokemonListed = document.createElement("h2");
            namePokemonListed.appendChild(textNodeNamePokemon);

            divPokemonListed.appendChild(namePokemonListed);

            divList.appendChild(divPokemonListed);
            divList.appendChild(pokedex[pokemon].image);
        }




    });
}