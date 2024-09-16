function clicar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')

    let start = Number(inicio.value)
    let end = Number(fim.value)
    let lag = Number(passos.value)

    //variavel de paragrafo final do contador
    let parag = document.getElementById('parag')

    //string para acumular os números
    let sfim = ''
    if (start.value.length == 0 || end.value.length == 0 || lag.value.length == 0) {
        alert('[ERRO] Faltando dados!')
    } else {
        for(start; start <= end; start += lag) {
            //sfim =  sfim + `${start} ⭐`  Mesma forma de fazer!
            sfim += `${start} ⭐` //Fica mais bonito e enxuto!
        }
    }
    

    //adiciona bandeira no final
    //emoji \uD83C\uDFC1
    sfim += '🏁'

    parag.style.textAlign = "left"
    parag.innerText = `${sfim}`
}
