function nomeCompleto (){
    let nomeUsuario = prompt("Digite o nome completo do usuário")
    
    const partesNome = nomeUsuario.split(" ")

    const primeiroNome = partesNome[0]

    console.log(primeiroNome)
}

nomeCompleto()