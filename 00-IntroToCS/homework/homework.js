'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  let newArray = num.split("").reverse();

  newArray.forEach( function(elemnt, index) {
    suma = suma + (elemnt * Math.pow(2, index));
  });
  
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let newArray = [];

  do {
    newArray.push(num % 2);
    num = Math.trunc(num / 2);
  } while(num > 0);

  let newString = newArray.reverse().toString();

  return newString.replace(/,/g,"");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}