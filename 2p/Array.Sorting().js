  /** 
  *Alumnos:
  *Martin Ramses Flores Zepeda [2B]
  *Neck Manuel Vivas Rosales [2B]
  *
  *METODO SORT.
  */
  function NumerosAleatorios(){
    return Math.floor(Math.random()*10000+1)
  }
  let vector = [];
  for(let i = 0; i < 10000; i++) 
    vector[i] = NumerosAleatorios()
  console.time("Tiempo");
  
  vector.sort();
  console.timeEnd("Tiempo");
