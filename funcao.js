//função sem retorno
function imprimirSomar(a, b) {
  console.log(a, b);
}

imprimirSomar(2, 3);
imprimirSomar(2);
imprimirSomar(2, 10, 4, 5, 6, 7, 8);
imprimirSomar();

//função com retotno
function soma(a, b = 1) {
  return a + b;
}

let valor = soma(2, 3)

console.log(valor);
console.log(soma(2));
console.log();
