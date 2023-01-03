;//armazena uma função dentro de uma variavel
const imprimirSomar = function (a,b) {
    console.log(a + b)
}
imprimirSomar(2, 3)

//armazenando uma funçao arrow em uma variavel 


const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//return implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')