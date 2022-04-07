/**
 * Alumnos:
 * Martin Ramses Flores Zepeda [2B]
 * Neck Manuel Vivas Rosales [2B]
 */
class Torre {
  constructor(unidades = []) {
    this.unidades = unidades;
  }
  push(elemento) {
    if (elemento < (this.peek() ?? elemento + 1)) this.unidades.push(elemento);
    else console.log("No", elemento);
  }
  pop() {
    return this.unidades.pop();
  }
  peek() {
    return this.unidades[this.unidades.length - 1];
  }
  toString() {
    return this.unidades.toString();
  }
}
class Base {
  constructor(Altura = 3) {
    this.Torres = [new Torre(), new Torre(), new Torre()];
    for (let i = Altura; i > 0; i--) this.Torres[0].push(i);
    this.Altura = Altura; 
  }
  moverse(TorrePrincipal, TorreFinal) {
    if (
      this.Torres[TorrePrincipal - 1].peek() <
      (this.Torres[TorreFinal - 1].peek() ??
        this.Torres[TorrePrincipal - 1].peek() + 1)
    ) {
      this.Torres[TorreFinal - 1].push(this.Torres[TorrePrincipal - 1].pop());
      return true;
    }
    return false;
  }
  toString(mensaje = "[Torres de Hanoi]") {
    let cadena = `${mensaje}\n\n`;
    for (let i = this.Altura - 1; i >= 0; i--) {
      for (let j = 0; j < this.Torres.length; j++)
        cadena += (this.Torres[j].unidades[i] ?? "/") + "\t"; 
      cadena += "\n";
    }
    return cadena;
  }
  resolver(n = this.Altura, entrada = 1, salida = 3, auxiliar = 2) {
    if (n == 1) {
      base.moverse(entrada, salida);
      console.log(base.toString(`Torre ${entrada} a Torre ${salida}:`));
    } else {
      this.resolver(n - 1, entrada, auxiliar, salida);
      this.moverse(entrada, salida);
      console.log(base.toString(`Torre ${entrada} a Torre ${salida}:`));
      this.resolver(n - 1, auxiliar, salida, entrada);
    }
  }
  TorreAltura() {
    return this.Altura;
  }
}
const base = new Base(3);
console.log(base.toString());
base.resolver();
const mov = Math.pow(2, base.Altura) - 1;
console.log("Total: " + mov);
