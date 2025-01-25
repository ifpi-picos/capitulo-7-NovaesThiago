let listaDeFilmes = []
let listaVazia = []
let filmeAssistido = []


function menu (){
    menu:
    while(true){
        const mensagem = `
        SELECIONE UMA OPÇÃO:
        1 - ADICIONAR FILME NA LISTA
        2 - ORDENAR LISTA
        3 - PESQUISAR FILME
        4 - EXIBIR LISTA
        5 - MARCAR FILME ASSISTIDO
        6 - REMOVER FILME DA LISTA
        7 - LIMPAR LISTA
        0 - SAIR
        :`

        let opcao = parseInt(prompt(mensagem))

        switch(opcao){
            case 1:
                adicionarFilme()
                break;
            case 2:
                ordenarLista()
                break;
            case 3:
                pesquisarFilme()
                break;
            case 4:
                exibirLista()
                break;
            case 5: 
                marcaFilmeAssistido()
                break;
            case 6:
                removerFilme()
                break;
            case 7:
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

function adicionarFilme (){
    let filme = prompt("DIGITE O FILME QUE DESEJA ADICIONAR: ")
    listaDeFilmes.push(filme)
}

function ordenarLista (){
    const ordemAlfabetica = listaDeCompras.sort((a, b) => a.localeCompare(b))
    listaDeFilmes = listaVazia
    listaDeFilmes = ordemAlfabetica
}

function pesquisarFilme (){
    let item = prompt("DIGITE O ITEM QUE DESEJA PESQUISAR: ")
    const encontrado = listaDeFilmes.find(elemento => elemento === item)
    
    if (encontrado === true){
        console.log("ESSE ITEM ESTÁ NA LISTA")
    }else{
        console.log("ESSE ITEM NÃO ESTÁ NA LISTA")
    }
}

function exibirLista (){
    console.log(`LISTA DE FILMES: ${listaDeFilmes}`)
    console.log(`LISTA DE FILMES ASSISTIDOS: ${filmeAssistido}`)
}

function marcaFilmeAssistido (){
    let item = prompt("INFORME O FILME JÁ ASSISTIDO: ")

    item = item.toLowerCase()
    const index = listaDeFilmes.indexOf(item)

    if (index !== -1) {
        filmeAssistido.push(listaDeFilmes[index])
        listaDeFilmes.splice(index, 1)
    } else {
        console.log("FILME NÃO ENCONTRADO NA LISTA.")
    }
}

function removerFilme (){
    let item = prompt("INFORME O FILME QUE DESEJA REMOVER: ")

    item = item.toLowerCase()

    const index = listaDeFilmes.indexOf(item)
    if (index >=0 ){
        listaDeFilmes.splice(index, 1)
    } else{
        console.log("O ITEM NÃO ESTÁ NA LISTA DE COMPRAS")
    }
}

function limparLista (){
    listaDeFilmes = listaVazia
}

menu()