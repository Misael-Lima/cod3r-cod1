let valor //não inicializavel
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.tostring()) //erro

const produto = {}
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite declara undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)