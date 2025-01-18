let filmes = []
    
for(let i=0; i<5; i++){
    let filme = prompt("Digite o nome do filme: ")
    filmes.push(filme)
}

const fimesOrdemAlfabetica = filmes.sort((a, b) => a.localeCompare(b))
/*ainda to tentando entender como funciona esse sort, aparentemente ele sozinho faz uma equação que descobre 
qual valor é maior que o outro e ordena de acorfo com a posição do "a" e "b". 

o local compare vai fazer uma comparação de string com base nas regras locais(não entendi 100% mas aos poucos vai indo)
*/

console.log(fimesOrdemAlfabetica)