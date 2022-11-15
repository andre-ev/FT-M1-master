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
  
  while (current.next) {

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

var linkedList = new LinkedList();

console.log("linkedList.add('one'): ");
linkedList.add('one');

console.log("linkedList.add('two'): ");
linkedList.add('two');

console.log("linkedList.add('three'): ");
linkedList.add('three');

console.log("linkedList.add('four'): ");
linkedList.add('four');

console.log("linkedList.search('two')");
console.log(linkedList.search('two'));

console.log("linkedList.search('sdd')");
console.log(linkedList.search('sdd'));

console.log("linkedList.search('one')");
console.log(linkedList.search('one'));

console.log("linkedList.search('four')");
console.log(linkedList.search('four'));
