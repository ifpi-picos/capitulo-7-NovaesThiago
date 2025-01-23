
let listaDeCompras = []
let listaVazia = []

function menu(){
    menu:
    while(true){
        const mensagem = `
        SELECIONE UMA OPÇÃO:
        1 - ADICIONAR ITEM
        2 - REMOVER ITEM
        3 - PESQUISAR ITEM
        4 - EXIBIR LISTA
        5 - LIMPAR LISTA
        0 - SAIR
        :`

        let opcao = parseInt(prompt(mensagem))

        switch(opcao){
            case 1:
                adicionarItem()
                break;
            case 2:
                removerItem()
                break;
            case 3:
                pesquisarItem()
                break;
            case 4:
                exibirLista()
                break;
            case 5: 
                limparLista()
                break;
            case 0:
                break menu
            case undefined:
                console.log("OPÇÃO INVÁLIDA")
                break;
        }
    }
}

function adicionarItem (){
    const item = prompt("INFORME O ITEM QUE DESEJA ADICIONAR: ")
    listaDeCompras.push(item)
}

function removerItem (){
    let item = prompt("INFORME O ITEM QUE DESEJA REMOVER: ")

    item = item.toLowerCase()

    const index = listaDeCompras.indexOf(item)
    if (index >=0 ){
        listaDeCompras.splice(index, 1)
    } else{
        console.log("O ITEM NÃO ESTÁ NA LISTA DE COMPRAS")
    }

}

function pesquisarItem (){
    let item = prompt("INFORME O ITEM QUE DESEJA PESQUISAR: ")
    const encontrado = listaDeCompras.find(elemento => elemento === item)
    if (encontrado == true){
        console.log("ESSE ITEM ESTÁ NA LISTA")
    }else{
        console.log("ESSE ITEM NÃO ESTÁ NA LISTA")
    }
}

function exibirLista (){
    console.log(listaDeCompras)
}

function limparLista(){
    listaDeCompras = listaVazia
}

function saidaDeDados(){
    menu()
}

saidaDeDados()