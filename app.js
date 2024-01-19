var listaDeNumerosSorteados = [];
var numeroMax = 10;
var numeroSecreto = gerarNumeroAleatorio();
var tentativas = 1;

function exibirTextoNaTela(tag, texto){
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
exibirTextoNaTela('h1', 'Jogo Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10:');
}

mensagemInicial();

function verificarChute() {
    var chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        var palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        var mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero é menor');
        } else {
            exibirTextoNaTela('p', 'O numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    var numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    var quantidadeDeElementosLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosLista == numeroMax) {
    listaDeNumerosSorteados =[];
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}