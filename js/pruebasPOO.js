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

  class Vehiculo {
    constructor(tipo, nombre, ruedas) {
      this.tipo = tipo;
      this.nombre = nombre;
      this.ruedas = ruedas;
    }
  
    getRuedas() {
      return this.ruedas;
    }
  
    arrancar() {
      console.log(`Arrancando el ${this.nombre}`);
    }
  
    aparcar() {
      console.log(`Aparcando el ${this.nombre}`);
    }
  }

  class Coche extends Vehiculo { // extiende de Vehiculo
    constructor(nombre, color) {
      super('coche', nombre, 4); // ejecuta el constructor del padre
      this.color = color;
    }
 }

 var beetle = new Coche('Volkswagen Beetle', 'Rojo'); 
var numRuedas = beetle.getRuedas() // 4
var color = beetle.color;
beetle.arrancar() // Arrancando el beetle