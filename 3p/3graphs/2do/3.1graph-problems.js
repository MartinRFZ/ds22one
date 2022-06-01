/** INSTRUCTIONS
 * 
 * implement a method, function, non-function solution
 * 
 * PROBLEM 
 *
 * select one implementation af a graph from books (pdfs):
 * mcm14
 * gro14  
 *
 * write it and make sure it runs
 */
let t = [
  [0, 1, 0, 0], //1
  [1, 0, 1, 1], //2
  [0, 1, 0, 0], //3
  [0, 1, 0, 0], //4
];
class Matriz {
  constructor(m) {
    this.m = m;
  }
  isSquare(m) {
    for (let i = 0; i < m.length; i++) {
      let evaluar;
      evaluar = m[i].length;

      if (evaluar != m.length) {
        return false;
      }
    }
    return true;
  }
  isSymmetrical(m) {
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
        if (m[i][j] != m[j][i]) {
          return false;
        }
      }
    }
    return true;
  }
  isTree(m) {
    let suma = 0;
    let cont = 0;
    let col = 0;
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
        cont++;
        col = cont / m.length;
      }
    }
    for (let i = 1; i < m.length; i++) {
      suma = 0;
      for (let j = 0; j < col; j++) {
        if (j < i) {
          suma += m[i][j];
          if (suma > 1) {
            return false;
          }
        }
      }
    }
    return true;
  }
  isGraph(m) {
    if (m.isTree(m) == false) {
      return true;
    } else {
      return false;
    }
  }
}
let m = new Matriz(t);
console.log(m.isSquare(m));
console.log(m.isSymmetrical(m));
console.log(m.isTree(m));
console.log(m.isGraph(m));
