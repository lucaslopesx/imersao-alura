function adicionarFilme() {
    let filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg" || ".JPG")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Imagem inválida");
    }
    limpaCampoFilme();
}

function limpaCampoFilme() {
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
    let elementoFilmeFavorito = `<img src="${filmeFavorito}">`;
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}
