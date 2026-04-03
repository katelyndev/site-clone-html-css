function toggleTexto() {
    var texto = document.getElementById("textoextra");
    var botao = document.getElementById("meuBotao");

    if (texto.classList.contains("escondido")) {
        texto.classList.remove("escondido");
        texto.classList.add("visivel");
        botao.innerHTML = "Ler menos";
    } else {
        texto.classList.remove("visivel");
        texto.classList.add("escondido");
        botao.innerHTML = "Ler mais";
    }
}

function mostrarItens() {
    var itens = document.querySelectorAll(".item2");
    var botao = document.getElementById("btnItens");

    itens.forEach((item, index) => {
        if (index >= 3) {
            item.classList.toggle("item-escondido");
        }
    });

    if (botao.innerHTML === "Ver mais") {
        botao.innerHTML = "Ver menos";
    } else {
        botao.innerHTML = "Ver mais";
    }
}
