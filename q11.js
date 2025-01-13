let filmes = []
let criticas =[]

for(let i=0; i<5; i++){
    let filme = prompt("Digite o nome do filme: ")
    let critica = prompt("Digite sua critica ao filme: ")
    filmes.push(filme)
    criticas.push(critica)
}

filmes.forEach(function(filme, index){
    console.log(filmes[index])
    console.log("Avaliação do filme: " + criticas[index])
})