let carta1 = {
    nome: "Carta1",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 4,
    },
};
let carta2 = {
    nome: "Carta2",
    atributos: {
        ataque: 9,
        defesa: 3,
        magia: 8,
    },
};
let carta3 = {
    nome: "Carta3",
    atributos: {
        ataque: 2,
        defesa: 10,
        magia: 8,
    },
};

let cartas = [carta1, carta2, carta3];
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
}

function exibirOpcoes() {
    let opcoes = document.getElementById("opcoes");
    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo}`;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtenAtributo() {
    let radioAtributo = document.getElementsByName("atributo");

    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtenAtributo();
    let elementoResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Voce perdeu";
    } else if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Voce venceu";
    } else {
        elementoResultado.innerHTML = valorCartaJogador;
    }
}

function changeTheme() {
    document.body.classList.toggle("dark");
}
