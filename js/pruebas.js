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