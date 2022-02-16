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

class Moto extends Vehiculo { // extiende de Vehiculo
  constructor(nombre, isSidecar = false) {
    super('moto', nombre, 2); // ejecuta el constructor del padre
    this.isSidecar = isSidecar;
  }

  tieneSidecar() {
    return this.isSidecar;
  }
}

var vespa = new Moto('Vespa');
console.log(vespa.tieneSidecar());

//metodos static: no necesitan una instancia creada para ser llamados

class Utilidades {
  constructor() { }

  static calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (hoy.getMonth() < fechaNacimiento.getMonth()) {
      edad--;
    }

    if ((fechaNacimiento.getMonth() === hoy.getMonth()) &&
      (hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  }

}
let fechaNacimiento = new Date(1991, 5, 8);
let edad = Utilidades.calcularEdad(fechaNacimiento);
console.log(edad); // 28

//Getters y setters

class Coche {
  constructor(marca, potencia) {
    this._marca = marca;
    this._potencia = potencia;
  }

  get marca() {
    return `marca: ${this._marca}`;
  }

  set potencia(value) {
    if (typeof value === 'number') {
      this._potencia = value;
    } else {
      console.error('la potencia debe ser numérica');
    }
  }
}

var ibiza = new Coche('seat', 105);
ibiza.potencia = 'Mucha'; // ERROR: la potencia debe ser numérica

