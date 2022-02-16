class Animal {
    constructor(nombre, sonido) {
      this.nombre = nombre;
      this.sonido = sonido;
    }
  
    emitirSonido() {
      console.log(`El ${this.nombre} hace ${this.sonido}`);
    }
  }
  
  var miPerro = new Animal('Perro', 'Guau!');
  var miGato = new Animal('Gato', 'Miau!');
  miPerro.emitirSonido(); // El Perro hace Guau!
  miGato.emitirSonido(); // El Gato hace Miau!