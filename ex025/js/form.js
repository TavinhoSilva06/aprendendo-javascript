function contagem() {
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let cont = 0
    while (cont <= num) {
        if (cont % 2 == 0) {
        console.log(cont)
        saida.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++
    }
    saida.innerHTML += ` &#x1F3C1;`
}