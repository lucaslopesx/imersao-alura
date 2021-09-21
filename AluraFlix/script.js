function adicionarFilme() {
    let filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg" && ".JPG")) {
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

// let listaFilme = [
//     "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
//     "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
//     "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",
// ];

// for (let i = 0; i < listaFilme.length; i++) {
//     document.write(`<img src="${listaFilme[i]}"">`);
// }
