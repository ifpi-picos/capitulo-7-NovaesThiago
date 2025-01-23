function primeiroUltimoNome (nomeCompleto){

    const partesNome = nomeCompleto.split(" ")
    const primeiroNome = partesNome[0]
    const ultimoNome = partesNome[partesNome.length - 1] //O "length" vai começar a contagem do 1 e a lista começa do 0 por isso o  "-1"
    
    console.log("Primeiro nome é ", primeiroNome)
    console.log("Ultimo nome é ", ultimoNome)
}

const nome = prompt("Digite o nome")
primeiroUltimoNome(nome)