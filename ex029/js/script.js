function login() {
    let name = document.getElementById('username')
    let endereco = document.getElementById('endereco')
    let idade = document.getElementById('idade')
    console.log(name.value + endereco.value + idade.value)
    alert('nome: ' + name.value +' \n'+ 'endereço: ' + endereco.value +' \n'+ 'idade: ' + idade.value)
}
