// Laços de repetição - FOR
//usando for com numbers

const listaNumeros = [25,45,76,12,89];

for (let i = 0 ; i < listaNumeros.length ; i++) {
    console.log(listaNumeros[i]);
}



//For usado com string

const operacoes = ['adição', 'subtração', 'multiplicação', 'divisão'];

function montaTextoDaLista() {

    let textoDaLista = '';
    for (let i = 0 ; i < operacoes.length ; i++) {
        textoDaLista += '<li>' + operacoes[i] + '</li>';
    }
    console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();