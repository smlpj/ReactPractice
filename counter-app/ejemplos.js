let numeros = [2, 3, 4, 1, 6, 5, 9, 7, 8];
let numeros2 = [2, 5, 9, 7, 8];

let obj2 = {
  nombre: "Objeto 2",
  x: 1,
  y: 2,
  alto: 3,
  ancho: 3,
};
let obj1 = {
  nombre: "Objeto 1",
  x: 2,
  y: 3,
  alto: 3,
  ancho: 3,
};

console.log(numeros);

//Ordenamiento burbuja
bubbleSort = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] < numeros[j]) {
        let aux = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = aux;
      }
    }
  }
  return numeros;
};

console.log(bubbleSort(numeros));

//Ordenamiento burbuja para array de objetos

let arrayDeObjetos = [obj1, obj2];
console.log(`Array de objetos desordenado: ${JSON.stringify(arrayDeObjetos)}`);

bubbleSortObjetos = (objetos) => {
  for (let i = 0; i < objetos.length; i++) {
    for (let j = 0; j < objetos.length; j++) {
      if (objetos[i].x < objetos[j].x) {
        let aux = objetos[i];
        objetos[i] = objetos[j];
        objetos[j] = aux;
      }
    }
  }
  return objetos;
};

console.log(
  `Array de objetos ordenado por x: ${JSON.stringify(
    bubbleSortObjetos(arrayDeObjetos)
  )}`
);

//Dos objetos que se traslapan

let message =
  (obj1.x < obj2.x &&
    obj1.x + obj1.ancho > obj2.x &&
    obj1.y < obj2.y &&
    obj1.y + obj1.ancho > obj2.y) ||
  (obj2.x < obj1.x &&
    obj2.x + obj2.ancho > obj1.x &&
    obj2.y < obj1.y &&
    obj2.y + obj2.ancho > obj1.y)
    ? "Se traslapan"
    : "No se traslapan";
console.log(message);

//Invertir un string
let invertirString = (string) => {
  let stringInvertido = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertido += string[i];
  }
  return stringInvertido;
}
console.log(invertirString("hola"));

//Compruebe si una palabra es palíndrome
let palindrome = (palabra) => {
  let palabraInvertida = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
  }
  return palabra === palabraInvertida;
};
let message2 = palindrome("radar") ? "Es palindrome" : "No es palindrome";
console.log(message2);

//Encontrar los números faltantes en un array de números con un mínimo y un máximo
let faltantes = (numeros, min, max) => {
  let faltantes = [];
  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      faltantes.push(i);
    }
  }
  return faltantes;
}
console.log(faltantes(numeros2, 1, 10));