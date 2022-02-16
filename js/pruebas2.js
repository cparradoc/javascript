//SEGUNDA PARTE PRUEBAS

//Peticiones asincronas en Js

//Callbacks
//Es la primera y la forma más común de controlar la asincronía en JavaScript hasta 2015. Ej:

const callbackExample = (list, message) => {
    console.log(`El listado final es: ${list.join(', ')} -`, message);
  }
  
const addItemAndTriggerCallback = (item, list, callback) => {
    if (!list) {
      setTimeout(() => {
        throw new Error('No existe el array');
      }, 2000);
    } else {
      setTimeout(() => {
        list.push(item);
        callback(list, '[OK]');
      }, 2000);
    }
  }

addItemAndTriggerCallback('Mario', ['Alberto', 'Jose'], callbackExample);


const listina = ['Jose', 'Alberto'];

setTimeout(() => listina.push('Mario'), 2000);
listina.push('Pedro');

console.log(listina); //Mario aun no esta en el momento en el que sucede la impresion de la lista. Se añade despues


//Cuidado: no enlazar unos callbacks con otros para no producir un 'Callback Hell' o 'Pyramid of Doom'

//PROMESAS
//Una Promise (promesa en castellano) es un objeto que representa la terminación o el fallo de una operación asíncrona
//Surgen en ES6 para mejorar el proceso de callbacks

const addItem = (item, listado) => {
    const promise = new Promise((resolve, reject) => {
      if (!listado) {
        reject('No existe el array');
      }
  
      setTimeout(function () {
        listado.push(item);
        resolve(listado);
      }, 2000);
    });
  
    return promise;
  };
  
const listado = ['Rojo', 'Azul', 'Verde'];
  
addItem('Amarillo', listado)
    .then((listado) => {
      console.log(`El listado final es: ${listado.join(', ')}`);
    })
    .catch((err) => {
      throw new Error(err);
    });

const list = ['Raising Arizona','Fargo','Barton Fink'];

addItem('The big Lewoski', list)
    .then(() => addItem('O Brother, Where Art Thou?', list))
    .then(() => addItem('The Man Who Wasnt There', list))
    .then(() => addItem('The Ladykillers', list))
    .then(() => {
        console.log(list);
      });    

/*const filmography = '';
addItem('The big Lewoski', filmography)
    .then(() => addItem('O Brother, Where Art Thou?', filmography))
    .then(() => addItem('The Man Who Wasnt There', filmography))
    .then(() => addItem('The Ladykillers', filmography))
    .then(() => {
        console.log(filmography);
      })
    .catch(err => console.log(err.message));*/

//ES5
let promise = new Promise(function (resolve, reject) {
  // El ejecutor se ejecuta automáticamente cuando se construye la promesaconsole.log("EXECUTED EXECUTER");

  // Pasado 1 seg estamos resolviendo la promesa con el valor "done"
  setTimeout(function() {
    resolve("done")
  }, 1000);
});

// ES6
let promise6 = new Promise((resolve, reject) => {
  // El ejecutor se ejecuta automáticamente cuando se construye la promesaconsole.log("EXECUTED EXECUTER");

  // Pasado 1 seg estamos resolviendo la promesa con el valor "done"
  setTimeout(() => resolve("done"), 1000);
});

promise6.then(
    (result) => {
      // Manejamos el resultado
      console.log(result);
    },
    (err) => {
      // Manejamos el reject concreto
      console.error(err);
    }
  );
  
  // Error general
  promise6.catch(
    (err) => {
      // Manejamos el error
      console.error(err);
    }
  );

console.log(promise6);

//MANEJO DE ERRORES

//Error no controlado
const error = null.nombre;

try {
  // error controlado
  const error = null.nombre;
} catch (error) {
  console.error('error', error);
}

//ASYNC/AWAIT
//permiten trabajar con promesas sin declarar then y catch

const myFunction = async () => {
    var result = await functionAsincrona();
};

const addItem2 = (item, list) => {
    const promise = new Promise((resolve, reject) => {
      if (!list) {
        reject('No existe el array');
      }
  
      setTimeout(function () {
        list.push(item);
        resolve(list);
      }, 2000);
    })
  
    return promise;
  };
  
  const processFilm = async (film, filmography) => {
    try {
      const result = await addItem2(film, filmography);
      console.log(result);
    } catch (error) {
      console.error('error', error);
    }
  }
  
  const filmography2 = ['Raising Arizona','Fargo','Barton Fink'];
  processFilm('The big Lewoski', filmography2);
  processFilm('O Brother, Where Art Thou?', filmography2);
  processFilm('The Ladykillers', filmography2);
  console.log(filmography2);


//PROMISE ALL
//SIRVE OARA RESOLVER VARIAS PROMESAS A LA VEZ

const theBigLewoski = Promise.resolve('The big Lewoski');
const trueGrit = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'True Grit');
});

Promise.all([theBigLewoski, trueGrit]).then(films => {
  console.log(films);
  // ['The big Lewoski', 'True Grit']
});


const theBigLewoski = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'The big Lewoski');
});
const theLadyKillers = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'The Lady Killers');
});
const joJoRabbit = new Promise((resolve, reject) => {
    reject('jo jo rabbit - error Taika Waititi');
});
  
/* Example: .then with 2 functions */
Promise.all([theBigLewoski, theLadyKillers, joJoRabbit]).then(
    (films) => {
      console.log(films);
    }, (err) => {
      console.error(err);
});


//PETICIONES XHR

  fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => { //se necesita un .then que devuelva la respuesta
    return response.json();
  })
  .then((myJson) => { //se necesita un segundo .then para resolver la promesa
    console.log(myJson);
  });

fetch('https://rickandmortyapi.com/api/character/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });