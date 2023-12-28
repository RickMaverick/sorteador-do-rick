function sortear() {
    var numLimite = Number(document.querySelector('#num-limite').value)
    
    if (numLimite > 0 && numLimite % 1 == 0) {
        var numSorteio = Math.floor(Math.random() * numLimite)
        var res = document.getElementById('res')

        res.style.color = 'aliceblue'
        res.style.fontSize = '30px'
        res.innerHTML = `${numSorteio}`
        
    } else if (numLimite <= 0) {
        alert('Escolha um número maior que zero.')
        numLimite = 0
    } else if (numLimite % 1 != 0) {
        alert("Escolha um numero inteiro.")
        numLimite = 0
    }
}