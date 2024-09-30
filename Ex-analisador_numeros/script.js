let num = document.getElementById('numero')
let lista = document.getElementById('lista')
let res =  document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }   

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let option = document.createElement("option")
        option.innerHTML = `Valor ${num.value} adicionado`
        lista.appendChild(option)
        console.log(valores)
        res.innerHTML = ""
    } else {
        alert('Número encontrado na lista ou inválido!')
    }
    num.value = ""
    num.focus() 
}

function finalizar() {
    if( valores.length > 0) {
        let soma = valores.reduce((a, b) => a + b, 0)
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let media = soma / valores.length
        
        res.innerHTML = 
        `
            <p>Total de Números: ${valores.length}</p>
            <p>Maior Número: ${maior}</p>
            <p>Menor Número: ${menor}</p>
            <p>Soma: ${soma}</p>
            <p>Média: ${media.toFixed(2)}</p>
        `
    } else {
        alert('Adicione um número antes de finalizar!')
    }
}
