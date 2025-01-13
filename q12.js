
let filmes = []
let criticas = []

for(let i=0; i<2; i++){
    let filme = prompt("Digite o nome do filme: ")
    let critica = prompt("Digite sua critica ao filme: ")
    filmes.push(filme)
    criticas.push(critica)
}

for(let filme of filmes){
    console.log(filme)
}

for(let critica of criticas){
    console.log(`critica do filme primeiro filme é ${critica}`)
}