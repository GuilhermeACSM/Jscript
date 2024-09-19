function clicar() {
    let textn = document.getElementById('number')
    let texta = document.getElementById('texta')

    let num = Number(textn.value)

    if(textn.value == 0) {
        alert('[ERRO] Digite um número')
    }
    
    texta.innerHTML = ""
    if(num <= 1) return false
    for(let i = 2 ; i <= Math.sqrt(num) ; i++) {
        if(num % i === 0) return false
    }
    return true

    

}