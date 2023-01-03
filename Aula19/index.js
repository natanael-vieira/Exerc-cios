// for of

const operacoes = ['adição', 'subtração', 'multiplicação', 'divisão'];

// function montaTextoDaLista() {

//     let textoDaLista = '';
//     for (let operacao of operacoes) {
//         textoDaLista += '<li>' + operacao + '</li>';
//     }
//     console.log(textoDaLista);
//     return textoDaLista;
// }

// document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();


// //usando for of com objetos

// let jogadores = [
//     {
//         nome: 'Natanael',
//         posicao: 'Zagueiro'
//     },
//     {
//         nome: 'Thais',
//         posicao: 'Atacante'
//     },
//     {
//         nome: 'Abigail',
//         posicao: 'Volante'
//     },
//     {
//         nome: 'Rute',
//         posicao: 'Lateral'
//     }
// ];

// console.log(jogadores);

// for (jogador of jogadores) {
//     console.log((jogador.nome),'joga na posição:', (jogador.posicao));
// }


// // while - enquanto / Sempre declarar a variável antes do laço

// let i = 0;
// while (i < operacoes.length){
//     console.log(operacoes[i]);
//     i++;
// }

// console.log('Testando o while');

let j = 0;

do {
    console.log(`${j} - ${operacoes[j]}`);
    j++;
} while (j < operacoes.length);