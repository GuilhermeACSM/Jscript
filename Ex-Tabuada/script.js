function clicar() {
    let numero = document.getElementById("numero");
    let numero2 = Number(numero.value);
    let text = document.getElementById("text");

    if (numero2 < 0) {
        alert("Por favor, insira um número válido e maior ou igual a 0.");
    } else {
        text.value = ""; // Limpa o conteúdo anterior
        for (let contador = 1; contador <= 10; contador++) {
            let resultado = numero2 * contador;
            text.value += `${numero2} x ${contador} = ${resultado}\n`; // Exibe a tabuada no textarea
        }
        ajustarAlturaTextarea(text); // Ajusta a altura dinamicamente
    }
}

function ajustarAlturaTextarea(elemento) {
    elemento.style.height = (elemento.scrollHeight) + "px"; // Ajusta para a altura do conteúdo
}


