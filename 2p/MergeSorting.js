  /** 
  *Alumnos:
  *Martin Ramses Flores Zepeda [2B]
  *Neck Manuel Vivas Rosales [2B]
  *
  *METODO MERGE.
  */
  class CArray {
  constructor(NumeroDeElementos) {
    this.dataStore = [];
    this.pos = 0;
    this.gaps = [5, 3, 1];
    this.NumeroDeElementos = NumeroDeElementos;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.MergeSorting = MergeSorting;
    this.mergeArrays = mergeArrays;
    this.length = this.dataStore.length;
    for (let i = 0; i < NumeroDeElementos; ++i) {
      this.dataStore[i] = 0;
    }
  }
}

function MergeSorting(arr = this.dataStore) {
  if (arr.length < 2) {
    return;
  }
  let step = 1;
  let izquierda, derecha;
  while (step < arr.length) {
    izquierda = 0;
    derecha = step;
    while (derecha + step <= arr.length) {
      mergeArrays(arr, izquierda, izquierda + step, derecha, derecha + step);
      izquierda = derecha + step;
      derecha = izquierda + step;
    }
    if (derecha < arr.length) {
      mergeArrays(arr, izquierda, izquierda + step, derecha, arr.length);
    }
    step *= 2;
  }
}
function mergeArrays(Arrays, IniciarDeIzquierda, DetenerIzquierda, IniciarDeDerecha, DetenerDerecha) {
  let ArrayDerecha = new Array(DetenerDerecha - IniciarDeDerecha + 1);
  let ArrayIzquierda = new Array(DetenerIzquierda - IniciarDeIzquierda + 1);
  k = IniciarDeDerecha;
  for (let i = 0; i < ArrayDerecha.length - 1; ++i) {
    ArrayDerecha[i] = Arrays[k];
    ++k;
  }
  k = IniciarDeIzquierda;
  for (let i = 0; i < ArrayIzquierda.length - 1; ++i) {
    ArrayIzquierda[i] = Arrays[k];
    ++k;
  }
  ArrayDerecha[ArrayDerecha.length - 1] = Infinity; 
  ArrayIzquierda[ArrayIzquierda.length - 1] = Infinity; 
  let m = 0;
  let n = 0;
  for (let k = IniciarDeIzquierda; k < DetenerDerecha; ++k) {
    if (ArrayIzquierda[m] <= ArrayDerecha[n]) {
      Arrays[k] = ArrayIzquierda[m];
      pasos++;
      m++;
    } else {
      Arrays[k] = ArrayDerecha[n];
      n++;
      pasos++;
    }
  }
}
function setData() {
  for (let i = 0; i < this.NumeroDeElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * 10000 + 1);
  }
}
function clear() {
  for (let i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}
function insert(elementos) {
  this.dataStore[this.pos++] = elementos;
}

let pasos = 0;

let numeros = new CArray(10000);

for (let i = 0; i < 10; i++) {
  numeros.setData();
  let principio = new Date().getTime();
  numeros.MergeSorting();
  let final = new Date().getTime();
  let transcurrido = final - principio;
  console.log();
  console.log("Tiempo: " + transcurrido + " ms");
  console.log("Pasos: " + pasos * 2);
  numeros.clear();
  pasos = 0;
}
