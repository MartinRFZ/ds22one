 /** 
  *Alumnos:
  *Martin Ramses Flores Zepeda [2B]
  *Neck Manuel Vivas Rosales [2B]
  *
  *METODO QUICK.
  */
  class ArrayListado {
  constructor(NumeroDeElementos) {
    this.array = [];
    for (let i = 0; i < NumeroDeElementos; ++i) {
      this.array[i] = 0;
    }
    this.NumeroDeElementos = NumeroDeElementos;
  }
  toString() {
    return array.join();
  }
  insert(unidad) {
    array.push(unidad);
  }
  setData() {
    for (let i = 0; i < this.NumeroDeElementos; ++i) {
      this.array[i] = Math.floor(Math.random() * this.NumeroDeElementos + 1);
    }
  }
  clear() {
    for (let i = 0; i < this.array.length; ++i) {
      this.array[i] = 0;
    }
  }
  swap(array, indice1, indice2) {
    let auxiliar = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = auxiliar;
  }
  quickSort() {
    this.quick(this.array, 0, this.array.length - 1);
  }
  quick(array, izquierda, derecha) {
    let indices;
    if (array.length > 1) {
      indices = this.partition(array, izquierda, derecha);
      if (izquierda < indices - 1) {
        this.quick(array, izquierda, indices - 1);
      }
      if (indices < derecha) {
        this.quick(array, indices, derecha);
      }
    }
  }
  partition(array, izquierda, derecha) {
    let centro = array[Math.floor((derecha + izquierda) / 2)],
      i = izquierda,
      j = derecha;
    while (i <= j) {
      while (array[i] < centro) {
        i++;
      }
      while (array[j] > centro) {
        j--;
      }
      if (i <= j) {
        this.swap(array, i, j);
        pasos++;
        i++;
        j--;
      }
    }
    return i;
  }
}

const quick = new ArrayListado(10000);
let pasos = 0;
for (let i = 0; i < 10; i++) {
  quick.setData();
  let principio = new Date().getTime();
  quick.quickSort();
  let final = new Date().getTime();
  let transcurrido = final - principio;
  console.log();
  console.log("time: " + transcurrido + " ms");
  console.log("Pasos: " + pasos * 2);
  quick.clear();
  pasos = 0;
}
