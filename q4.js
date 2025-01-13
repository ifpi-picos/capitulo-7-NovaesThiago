const valor = Number(49.99)
let quantidade = Number(50)

const produto = {
    preço: valor,
    nomeDoProduto: "Cordas de Guitarra",
    quantidade: quantidade,
}

let resultado = (valor*quantidade)

console.log("O valor total do estoque é: ","R$", resultado)