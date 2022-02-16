var moderatII = new Array();
moderatII[0] = "The Mark";
moderatII[1] = "Bad Kingdom";
moderatII[2] = "Versions";
moderatII[3] = "Milk";
moderatII[4] = "Gita";
moderatII[5] = "Damage Done";
        
var moderat = new Array();
moderat[0] = "Rusty nails";
moderat[1] = "Seanmonkey";
moderat[2] = "Nasty silence";
moderat[3] = "Berlin";

moderatII.concat(moderat);

console.log(moderatII);
    
console.log(moderat);

var mensaje = "Hola, esto es un mensaje para imprimir en log";
console.log(mensaje);

var numa = 5;
console.log(numa);
var numb = 2
console.log(numa + numb); // Imprime 7
console.log(numa - numb); // Imprime 3
console.log(numa * numb); // Imprime 10
console.log(numa / numb); // Imprime 2.5

var num1 = numa++; // se incrementa despues de devolver el valor
var num2 = numb--; // se decrementa despues de devolver el valor

console.log(numa);
console.log(num1);
console.log(numb);
console.log(num2);

var tengoDinero = true;
var meDaMiedoVolar = true;

// Puedo ir a Mexico si tengo dinero y NO me da miedo volar
var puedoIrAMexico = tengoDinero && !meDaMiedoVolar;
console.log(puedoIrAMexico);

var meTomoUnTranquilizante = true;
// Puedo ir a Mexico si tengo dinero y NO me da miedo volar o me tomo un tranquilizante
var puedoIrAMexico = tengoDinero && (!meDaMiedoVolar || meTomoUnTranquilizante);
console.log(puedoIrAMexico);


var result1 = true == 1;
var result2 = false == 0;
var result3 = "1" == 1;
var result4 = undefined == null;

var result5 = true === 1;
var result6 = false === 0;
var result7 = "1" === 1;
var result8 = undefined === null;

var wtf = result6 === result7 || result8; 

var score = 5;

console.log(score >= 6 ? 'aprobado' : 'suspenso'); //operador ternario, no encadenarlos

var myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

var imprime = function(element) {
  console.log(element);
}

myArray.forEach(imprime); //ejemplo de foreach pra no hacer un bucle for que recorra el array entero, pueden ser objetos no iterables

var justiceLeague = ['Batman', 'Aquaman', 'Superman'];
for (var justice of justiceLeague) { //tambien se pueden iterar con for of, aunque solo en ibjetos iterables
  console.log(justice);
}

var dieHardArray = [1, 2,'Simon', 'John McClane', 'Zeus Carver'];

var dieHardObj = {
  name: 'John',
  surname: 'McClane',
  age: 37
};
 
// Iterar un Array
for (value of dieHardArray) {
  console.log(value);  
}

for (key in dieHardArray) {
  console.log(key);  
}

 
// Iterar un Objeto

for (key in dieHardObj) {
  console.log(key);  
}
 
/*for (value of dieHardObj) {
  console.log(value);  
}*/

function sayHello() {
        console.log('Hello!');
}
      
function addListeners() {
        document.getElementById("btn").addEventListener("click", sayHello);
}
      
window.onload = function() {
        // init listeners
        addListeners();
      
        // init content
        addElement();
}
      
function addElement() {
        var newElem = document.createElement('div');
        newElem.id = 'nuevoElemento';
        newElem.className = 'bloque';
        newElem.style = 'background:red; width:200px; height:200px'; 
        var body = document.querySelector('body'); 
        body.appendChild(newElem);
}

console.log(this);

var avengers = {
  value: 'this se encuentra dentro de avengers',
  avengerFunction: function() {
      // this en el scope de un objeto
      console.log(this);
  }
}
avengers.avengerFunction(); 

//el valor de this depende del objeto desde el que se invoca

var fantasticFour = {
  nombre: "Reed Richards",
  miName: function() { 
    console.log(this.nombre);
  }
};
var reference = fantasticFour.miName; //reference TIENE que estar igualado a una funcion, de otra manera no funciona
reference(); //devuelve undefined

reference.call(fantasticFour); //le pasamos fantasticFour como argumento para que lo tome como this y llame
//a su funcion

var fantasticFour2 = {
  nombre: "Reed Richards",
  saludar: function (amigo1, amigo2) {
    console.log("Hola " + amigo1 + " y " + amigo2 + ", yo soy " + this.nombre);
  }
};

var miFantastic = fantasticFour2.saludar;

miFantastic.call(fantasticFour2, "Sue Storm", "Johnny Storm");

miFantastic.apply(fantasticFour, [ "Ben Grimm", "Sue Storm" ]); //apply funciona de forma similar pero como
//segundo argumento toma una array con los argumentos de la funcion

reference.apply(fantasticFour); //en el caso de no tener argumentos funcionaria igual que call (entiendo)

//con bind() solo tenemos que pasarle el contexto (El this que queremos que tome), esta función devuelve
//una funcion que, cuando se llame, ejecutara la funcion original bindeada

var xMen = {
  nombre: "Jubilee"
};

function myXmen() {
  console.log(this.nombre);
}

var myXmenBind = myXmen.bind(xMen);

myXmenBind();

var dragonBall = {
  name: 'Son',
  lastname: 'Goku',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
};

var mySon = {
  name: 'Son',
  lastname: 'Gohan'
};

var myDragonBall = dragonBall.fullname.apply(mySon);

console.log(myDragonBall);


function outer() {
  var nombre = "Nombre oculto en contexto local";
  function inner() {
    console.log('Accediendo al contexto local y recuperando el nombre oculto: ' + nombre);
  }
  return inner;
}

var miFunc = outer();
miFunc(); // No sabe nada del nombre interno del clousure


function changePokemon(pokemon) {
  return function() {
    console.log('Mi pokemon preferido es: ' + pokemon)
  }
}
var pokemonAgua = changePokemon('Blastoise');
var pokemonPlanta = changePokemon('Bulbasur');
var pokemonElectrico = changePokemon('Pikachu');

// Comprobación del clousure
pokemonElectrico();
pokemonPlanta();
pokemonAgua();

function changePokemon2(pokemon) { //probando con otra sintaxis pero que a priori debería funcionar (funciona)
  function cierre() {
   console.log('Mi pokemon preferido es: ' + pokemon)
 }
 return cierre;
}
var pokemonAgua2 = changePokemon2('Blastoise');
var pokemonPlanta2 = changePokemon2('Bulbasur');
var pokemonElectrico2 = changePokemon2('Pikachu');

// Comprobación del clousure
pokemonElectrico2();
pokemonPlanta2();
pokemonAgua2();


var x = 'global value';
function foo() {
  console.log(x); 
  // undefined 
  var x = 'local value';
  console.log(x); 
  // local value
} 
foo();

//hay que tener en cuenta que dentro de las llaves de un if o un for, no se abre un ambito nuevo
//cuando hablamos de un var
