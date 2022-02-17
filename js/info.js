fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        createPokemon(myJson);
    })

  class Pokemon {
      constructor(nombre, url) {
          this.nombre = nombre;
          this.url = url;
      }
    }