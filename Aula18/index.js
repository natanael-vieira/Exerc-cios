// Laços de repetição - FOR

/*const listaNumeros = [25,45,76,12,89];

for (let i = 0 ; 1 < listaNumeros.length ; i++) {
    console.log(listaNumeros[i]);
}*/

const operacoes = ['adição', 'subtração', 'multiplicação', 'divisão'];

function montaTextoDaLista() {

    let textoDaLista = '';
    for (let i = 0 ; i < operacoes.length ; i++) {
        textoDaLista += '<li>' + operacoes[i] + '</li>';
    }
    
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();