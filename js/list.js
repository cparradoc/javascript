class Pokemon{
    constructor(id, name) {
        this.id = id;
        this.name = name;


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
    });
}