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


//USANDO LET, RESTRINGIMOS SU AMBITO A LAS LLAVES EN LAS QUE ESTA DEFINIDO

var variableVar = "Soy un VAR";
let variableLet = "Soy un LET";
if(true) {
   var variableVar = "Nuevo valor de VAR";
   let variableLet = "Nuevo valor de LET"; //este valor de la variable se obvia porque esta dentro de laves

}
console.log(variableVar); 
// Nuevo valor de VAR 
console.log(variableLet); 
// Soy un LET


//USANDO LET, CONSERVAMOS EL TEMA DEL AMBITO PERO A MAYORES NO SE PUEDE MODIFICAR SU VALOR DE INICIALIZACION

/*function explainConst(){
  const x = 10;
  console.log(x); // output 10
  x = 20; //throws type error
  console.log(x);
}

explainConst();*/

//CON STRING LITERALS, USANDOLAS COMO LAS COMILLAS SENCILLAS O DOBLES, PODEMOS COMBINAR VARIABLES JS DENTRO DE
//CADENAS DE TEXTO

const edad = 33;
const str = `Hola, tengo ${edad} años`;
console.log(str);

//tambien admite saltos de linea en un bloque de texto
const divNodeText = `

  <div>
    <p>Hola chicos</p>
  </div>
`;
console.log(divNodeText);


// LAS ARROW FUNCTIONS SIRVEN PARA DECLARAR FUNCIONES DE MANERA MAS COMPACTA SIN UTILIZAR LA PALABRA FUNCTION

const getName = () => {
  console.log('Devolviendo nombre');
  return 'Carlos';
};
const nameA = getName();
console.log(nameA);

// Ejemplo inline (omitiendo el return)
const getSurname = () => 'Martín';
const surname = getSurname();
console.log(surname);

//Ejemplo querer devolver un objeto inline
const myObjt = () => ({ atribute: 'atribute', atribute: 'atribute' });
console.log(myObjt());

//Argumentos en las arrow functions

//Si solamente queremos pasar un argumento no necesitamos parentesis
const multiTwo = x => x * 2;
const result = multiTwo(3);
console.log(result);

//En el caso de que erer pasar varios parametros si que necesitaremos utilizar parentesis
const multi = (a, b) => a * b;
const multiplicacion = multi(3, 8);
console.log(multiplicacion);

//Tambien se pueden tener valores por defecto
const multiDefault = (a, b = 2) => a * b;
const operation = multiDefault(2);
const operation2 = multiDefault(2, 3);
console.log(operation); //toma el valor por defecto b = 2
console.log(operation2); //no necesita tomar el valor por defecto ya que le pasamos todos los que necesita



//ARROW FUNCTIONS COMO HIGH ORDER FUNCTIONS PARA SIMPLIFICAR EL TRABAJO DE FUNCIONES QUE DEVUELVEN FUNCIONES

//Ejemplo:
const generateAMultiplier = function(a) {
  return function(b) {
    return b * a;
  }
};

const multiplier = generateAMultiplier(5);

const foo2 = multiplier(10); 
console.log(foo2);

//Ahora usamos arrow functions como high order functions
const generateAMultiplier2 = a => b => a * b; //definimos una funcion con parametro a, que nos devuelve una funcion
//con parametro b, la cual ejecuta una multiplicacion de ambos parametros
const multiplier2 = generateAMultiplier2(5); //5 seria el primer parametro, el resultado que tenemos es una funcion
//a la cual le tenemos que pasar su parametro "b"
const foo3 = multiplier2(10); //el resultado de foo3 es el resultante de "return function(b)" siendo b = 10
console.log(foo3);


//Limitaciones de las arrow functions

// 1. No se pueden utilizar para construir objetos
/* const MyClass = () => {};
   const object = new MyClass();
*/

// 2. No se pueden emplear como funciones generadoras. No admiten la palabra yield dentro de su cuerpo, asi que
//habria que seguir utilizando la forma habitual: function

// 3. Los metodos call y apply son ignorados, no pueden modificar el valor de this dentro de una funcion


//OBJECT DESTRUCTURING

let marvelCharacter = {
  name3: {
    heroName: 'Doctor Strange',
    humanName: 'Stephen Vincent Strange'
  },
  team: ['Avengers', 'Iluminati']
}

// Destructuring - Ex1
let { name3, team } = marvelCharacter;

// Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
console.log(name3.heroName, name3.humanName);
console.log(team[0], team[1]);

// Destructuring - Ex2
let { heroName, humanName } = marvelCharacter.name3;

console.log(heroName);
console.log(humanName);



//SPREAD OPERATOR PERMITE QUE UNA EXPRESION SEA EXPANDIDA EN SITUACIONES DONDE SE ESPERAN MULTIPLES ARGUMENTOS
//(LLAMADAS A FUNCIONES) O MULTIPLES ELEMENTOS (ARRAYS LITERALES)

let xmen = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl'];
let newXmen = ['Wolverine', 'NightCrawler', 'Storm'];

// Antes se usaba el concat y ahora ...
let myMutants = [...xmen, ...newXmen];
console.log(myMutants);

// Se puede usar también para copiar un array
let xmenCopy = [...xmen];
console.log(xmenCopy);

// se usa para jugar con tu array sin modificarlo
let [lastMutant] = [...xmen].reverse();
console.log(xmen);
console.log(lastMutant);




// Spreed Operator in Parameters
function suma(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(suma(...numbers));

// Spreed Operator in Strings
const myTeam = 'RAYO';
const characters = [ ...myTeam ];
console.log(characters);

// Spreed Operator in Object
const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };

const newObj = { ...obj1, ...obj2, planet: 'Earth' };

console.log(newObj);

// Destructuring with spreed operator
const details = {
  firstName: 'Code',
  lastName: 'Burst',
  age: 22
};
// Saca el valor 22 y deja el resto de atributos
const { age, ...restOfTheDetails } = details;
console.log(age, restOfTheDetails);
console.log(details);


//IMPORT/EXPORT 
// se utiliza export para exportar en js funciones, objetos o tipos de dato primitivos del modulo para que
//puedan ser utilizados por otros programas con la sentencia import

/*export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // también var
export let name1 = …, name2 = …, …, nameN; // también var, const
export function FunctionName() {...}

import * from …;
import { name1, name2, …, nameN } from …;
import { import1 as name1, import2 as name2, …, nameN } from …;
import { default } from …;*/


//METODOS DE ARRAY

let bbkLive = [ "Belako", "Vetusta", "Pulp", "Greta Van Fleet" ];

console.log("El primer grupo es: " + bbkLive[0]); 
console.log("El tercer grupo es: " + bbkLive[2]);

for(var indice = 0; indice < bbkLive.length; indice++) {
  console.log("El grupo número " + indice + " es " + bbkLive[indice]); 
}

//push añade al final del array
bbkLive.push("León Benavente"); 
bbkLive.push("Rusowsky");

console.log(bbkLive);

//unshift añade al principio del array
bbkLive.unshift("Rusowsky");

console.log(bbkLive);

//con pop y shift tenemos el caso contrario, es decir, el de eliminacion
var fib = ["Franz Ferdinand", "Artic Monkeys", "Love of lesbian"]; 
var ultimo = fib.pop();
console.log(fib);
var primero = fib.shift();
console.log(fib);


//PROGRAMACION FUNCIONAL: array.map()
//array que contiene varios objetos
var officers = [  
  { id: 20, name: 'Captain Piett' },  
  { id: 24, name: 'General Veers' },  
  { id: 56, name: 'Admiral Ozzel' },  
  { id: 88, name: 'Commander Jerjerrod' }
];
console.log(officers);
console.log(officers[0]);

//Ejemplo: conseguir los ids

var officersIds = [];

officers.forEach((officer) => {  
  officersIds.push(officer.id);
});
console.log(officersIds);

var officerIds2 = [];
for(i = 0; i < officers.length; i++){
  officerIds2.push(officers[i].id);
}
console.log(officerIds2);

/*const officersIds3 = officers.map(officer => [officer.id]('http://officer.id/'));
console.log(officerIds3);*/

//map recibe dos argumentos, una devolucion de llamada y un contexto opcional.
//La devolucion de llamada se ejecuta para cada valor en el array y devuelve cada nuevo valor en el array

var arr = [{
  id: 1,
  name: 'bill'
}, {
  id: 2,
  name: 'ted'
}]

var result2 = arr.map(personita => ({ value: personita.id, text: personita.name }));

console.log(result2);


//PROGRAMACION FUNCIONAL: array.filter()
//se utiliza para filtrar algunos de los elementos del array

var pilots = [ 
  { id: 2, name: "Wedge Antilles", faction: "Rebels", }, 
  { id: 8, name: "Ciena Ree", faction: "Empire", }, 
  { id: 40, name: "Iden Versio", faction: "Empire", }, 
  { id: 66, name: "Thane Kyrell", faction: "Rebels", }];

var rebels = pilots.filter(function (pilot) {  //filtramos en la variable pilots
  return pilot.faction === "Rebels";}); //aquellos cuya faction es estrictamente "Rebels"
    
var empire = pilots.filter(function (pilot) {  
  return pilot.faction === "Empire";});

console.log(rebels);
console.log(empire);

//Se puede acortar utilizando arrow functions
const rebels2 = pilots.filter(pilot => pilot.faction === "Rebels");

const empire2 = pilots.filter(pilot => pilot.faction === "Empire");

console.log(rebels2);
console.log(empire2);


//PROGRAMACION FUNCIONAL: array.find()
//se utiliza para devolver el valor del priner elemento del array que cumpla la funcion de prueba proporcionada

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);


//PROGRAMACION FUNCIONAL: array.reduce()
//se utiliza para ejecutar una devolucion de llamada para cada elemento de un array reduciendo el resultado de 
//esta devolucion de llamada (el acumulador) de un elemento del array a otro

var pilots2 = [ 
  { id: 10, name: "Poe Dameron", years: 14, }, 
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30, }, 
  { id: 41, name: "Tallissan Lintra", years: 16, }, 
  { id: 99, name: "Ello Asty", years: 22, }
];

var totalYears = pilots2.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;}, 0)
  console.log(totalYears);

var totalYears2 = pilots2.reduce((acc, pilot) => acc + pilot.years, 0);
console.log(totalYears2);

var mostExpPilot = pilots.reduce(function (oldest, pilot) { 
  return (oldest.years || 0) > pilot.years ? oldest : pilot;}, {});
console.log(mostExpPilot);

var mostExpPilot2 = pilots.reduce((old, pilot) => (old.years || 0) > pilot.years ? old : pilot);
console.log(mostExpPilot2);


//EJEMPLO COMBINANDO .map(), .reduce() y .filter()

var personnel = [ 
  { id: 5, name: "Luke Skywalker", pilotingScore: 98, shootingScore: 56, isForceUser: true, }, 
  { id: 82, name: "Sabine Wren", pilotingScore: 73, shootingScore: 99, isForceUser: false, }, 
  { id: 22, name: "Zeb Orellios", pilotingScore: 20, shootingScore: 59, isForceUser: false, }, 
  { id: 15, name: "Ezra Bridger", pilotingScore: 43, shootingScore: 67, 
  isForceUser: true, }, 
  { id: 11, name: "Caleb Dume", pilotingScore: 71, shootingScore: 85, 
  isForceUser: true, }
];

//Se quiere conseguir la puntuación total de los usuarios de la fuerza

//Primero filtramos a los usuarios que no pueden usar la fuerza
var personnelFuerza = personnel.filter(
  function (person) {
    return person.isForceUser;
  }
);

//Recogemos loa puntuación total de cada uno de ellos
var fuerzaScores = personnelFuerza.map(
  function(jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  }
);

//Sumamos las puntuaciones de todos ellos
var totalJediScore = fuerzaScores.reduce(
  function (acc, score) {  
    return acc + score;
  }, 0
);

console.log(totalJediScore);

//Ahora en una sola linea
var totalJediScore2 = personnel .filter(function (person) { 
  return person.isForceUser; }) .map(function (jedi) { 
  return jedi.pilotingScore + jedi.shootingScore; }) .reduce(function (acc, score) { 
  return acc + score; }, 0);

  console.log(totalJediScore2);

  //Y ahora con arrow functions
const totalJediScore3 = personnel.filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

  console.log(totalJediScore3);