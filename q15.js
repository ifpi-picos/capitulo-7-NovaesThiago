function entradaDeTitulo() { 
    let filme = prompt("Digite o filme que deseja pesquisar: ")
    return filme
} //Vai retornar o filme que o usuário deseja pesquisar

function pesquisaTitulos() {
    let filme = entradaDeTitulo()

    filme = filme.toLowerCase()// vai deixar o texto digitado em minúsculo caso o usuário tenha digitado o texto com letras maiúsculas

    const filmes = [
        {titulo: "mad max", genero: "acao"}, 
        {titulo: "superbad", genero: "comedia"}, 
        {titulo: "o poderoso chefao", genero: "drama"}, 
        {titulo: "blade runner 2049", genero: "ficcao cientifica"}, 
        {titulo: "o senhor dos aneis", genero: "fantasia"}, 
        {titulo: "la la land", genero: "musical"},
    ] // lista de filme predefinida

    let encontrado = filmes.some(filmeObj => filmeObj.titulo === filme)
    //a função some verifica se o texto que o usuario digitou está na lista, caso sim ele retorna(true) caso não, (false)


    // if vai entrar com parametros boleanos
    if (encontrado) {
        console.log(`O filme ${filme} está na lista!`)
    } else {
        console.log(`O filme ${filme} não está na lista.`)
    } 
} 


// chama função pesquisaTitulos
pesquisaTitulos()