function clicar() {
    let text = document.getElementById('text')
    let parag = document.getElementById('parag')

    let txt = text.value

    for(text ; text <= txt; text++) {
        parag.innerText += ` - ${txt} \n`
    }
}
function excluir() {
    let parag = document.getElementById('parag');
    parag.innerText = ''; // Limpa todo o conteúdo do parágrafo
}