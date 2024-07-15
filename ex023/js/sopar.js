function contar() {
    console.log('inicio da função contar')
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`

    let cont = 1
    while (cont <= 10) {
        console.log('rodando o loop while')
        if (cont % 2 == 0) {
            console.log(cont);
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
        }
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}