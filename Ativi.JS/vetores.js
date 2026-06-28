let preco = [10,25,40,5]
let soma = 0

for (let i = 0; i < preco.length; i++) {
    soma += preco[i]
}
console.log(`O valor total da compra é: R$ ${soma}`)
