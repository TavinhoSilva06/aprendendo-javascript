function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`
    let c = 1
    while (c <= 10) {
        if (c % 2 == 0) {
        }
        else {
        console.log(c);
        saida.innerHTML += ` ${c} &#x1F449;`
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        }   
        c ++
    }
}