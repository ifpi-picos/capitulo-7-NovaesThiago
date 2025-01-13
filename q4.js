const produto = {
    preço: 49.99,
    nomeDoProduto: "Cordas de Guitarra",
    quantidade: 50,
    valorTotal: function(){
        return this.preço*this.quantidade
    }
}

console.log("O valor total do estoque é: ","R$", produto.valorTotal())