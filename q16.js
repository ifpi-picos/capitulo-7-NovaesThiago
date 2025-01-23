function gerarNumAleatorio(num){
    num = Number(Math.floor(Math.random() * 101))
    console.log(num)
    return num
}

function nomeJogador(){
    let nome = prompt("DIGITE O NOME DO JOGADOR: ")
    return nome
}

function tabelaJogadores(classificacaoJogadores){
    classificacaoJogadores.forEach(jogador => {
        console.log(`Nome: ${jogador.nome}, Pontuação: ${jogador.pontuacao}`);
    })
}

function regrasJogo(){
    console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
    console.log("ADIVINHE UM NÚMERO DE 0 À 100")
    console.log("LEMBRE-SE: O JOGADOR TEM 10 TENTATIVAS. BOA SORTE!")
}

function entradaDeDados(palpite){
    palpite = prompt("DIGITE O SEU PALPITE: ")
    return Number(palpite)
}

function dadosJogador(){
    const jogador ={
        nome: nomeJogador(),
        pontuacao: pontuacaoJogador()
    }
    return jogador    
}

function jogoAdivinhacao(){
    
    let palpite = entradaDeDados()
    let num = gerarNumAleatorio()
    let pontuacao = Number(100)
    

    while (true) {

        
        if (palpite == num){
            console.log("PARABÉNS! VOCÊ ACERTOU!")
            console.log("SUA PONTUAÇÃO FOI: ", pontuacao)
            console.log("O NÚMERO SECRETO ERA:", num)
            break
        }else if (palpite<0){
            console.log("NÚMERO INVALIDO")
            pontuacao = (pontuacao-1)
        } else if (palpite<num){ 
            console.log("O NÚMERO SECRETO É MAIOR QUE O PALPITE DIGITADO")
            pontuacao = (pontuacao-1)
        }else {
            console.log("O NÚMERO SECRETO É MENOR QUE O PALPITE DIGITADO")
            pontuacao = (pontuacao-1)
        }
    palpite = entradaDeDados()
    }      
    return pontuacao
}

function pontuacaoJogador(){
    return jogoAdivinhacao()
}


function perguntarRepetir() {
    let resposta = prompt("DESEJA JOGAR NOVAMENTE?? (sim/não): ").toLowerCase();
    return resposta === "sim";
}

function saidaDeDados(){

    let classificacaoJogadores = []
    regrasJogo()
    let continuar = true;
    while (continuar) {
        tabelaJogadores()
        classificacaoJogadores.push(jogador)
        continuar = perguntarRepetir()
    }
    console.log("CLASSIFICAÇÃO DOS JOGADORES: ")
    tabelaJogadores(classificacaoJogadores)
    console.log("OBRIGADO POR JOGAR!")
}

saidaDeDados()