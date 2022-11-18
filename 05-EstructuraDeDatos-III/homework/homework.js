'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {

  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
      return this.right;
    }
  } 
  
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
      return this.right;
    }
  }

  return false;
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  
  if (value < this.value && this.left) {
    return this.left.contains(value);
  }
  
  if (value > this.value && this.right) {
    return this.right.contains(value);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
  
  switch (type) {
    case 'pre-order':
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, type);
      if (this.right) this.right.depthFirstForEach(cb, type);
      break;

    case 'post-order':
      if (this.left) this.left.depthFirstForEach(cb, type);
      if (this.right) this.right.depthFirstForEach(cb, type);
      cb(this.value);
      break;

    default:
      if (this.left) this.left.depthFirstForEach(cb, type);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, type);
      break;
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, acum) {
  if (!acum) {
    var acum = [];
  }

  cb(this.value);

  if (this.left) acum.push(this.left);
  if (this.right) acum.push(this.right);

  if (acum.length > 0) {
    acum.shift().breadthFirstForEach(cb, acum);
  }

};

BinarySearchTree.prototype.size = function () { 
  let count = 0;
  count++;

  if(this.left) count += this.left.size();

  if (this.right) count += this.right.size(); 

  return count;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};

var tree,
      testArr,
      valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

tree = new BinarySearchTree(20);
testArr = [];

tree.insert(12);

console.log(tree);