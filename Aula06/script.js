let lucas = {
    nome: "Lucas",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0,
};
let rafael = {
    nome: "Rafael",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0,
};

function calculaPontos(jogador) {
    let pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

var jogadores = [lucas, rafael];

function exibeJogadores(jogadores) {
    let elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
        elemento += `<tr><td>${jogadores[i].nome}</td>`;
        elemento += `<td>${jogadores[i].vitorias}</td>`;
        elemento += `<td>${jogadores[i].empates}</td>`;
        elemento += `<td>${jogadores[i].derrotas}</td>`;
        elemento += `<td>${jogadores[i].pontos}</td>`;
        elemento += `<td><button onClick="adicionarVitoria(${i})">Vitória</button></td>`;
        elemento += `<td><button onClick="adicionarEmpate(${i})">Empate</button></td>`;
        elemento += `<td><button onClick="adicionarDerrota(${i})">Derrota</button></td>`;
        elemento += `</tr>`;
    }
    let tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
    let jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
    let jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

exibeJogadores(jogadores);
