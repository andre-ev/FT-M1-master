'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (arg) {
  const newNode = new Node(arg);
  let current = this.head;

  if (!current) {
    this.head = newNode;
    this.size++;
    return newNode;
  }

  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
  this.size++;
  return newNode;
};

LinkedList.prototype.remove = function () {
  let current = this.head;

  if(!current) return current;

  while (current.next) {

    if(!current.next.next) {
      let aux = current.next.value;
      current.next = null;
      this.size--;
      return aux;
    }

    current = current.next;
  }

  this.head = null;
  this.size--;
  return current.value;
};


LinkedList.prototype.search = function (arg) {
  let current = this.head;

  if(!current) {
    return null;
  } 
  
  while (current) {
    if (typeof arg === 'function') {
      if (arg(current.value)) return current.value;
      else current = current.next;
    } else if (arg === current.value) {
      return current.value;
    } else {
      current = current.next;
    }
  }

  return null;
};

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
<<<<<<< HEAD
  this.numBuckets = 35;
  this.buckets = [];
=======
  
>>>>>>> 4aadb7aa6169d0efbd540b4cb2d89b095a217bd2
}

HashTable.prototype.hash = function (key) {
  let acum = 0;

  for (const element of key) {
    const num = element.charCodeAt();
    acum += num;
  }

  return acum%this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError('Keys must be strings');

  let index = this.hash(key);
  
  if(!this.buckets[index]) {
    this.buckets[index] = {};
  }

  this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  
  if (this.buckets[index]) {
    return this.buckets[index][key];
  } else {
    return null;
  }
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);
  
  if (this.buckets[index][key]) return true;

  return false;
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};