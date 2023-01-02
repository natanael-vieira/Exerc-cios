// array.from

const x = Array.from('ABNT');

console.log(x);


// includes - retorna true ou false de acordo com as informações contidas no array

const cidades = ['Palhoça', 'Florianópolis', 'Goiânia'];

console.log(cidades.includes('Palhoça'));
console.log(cidades.includes('São José'));


// iterar ou percorrer

const jogadores = [
    {
        nome: 'Natanael',
        posicao: 'Zagueiro'
    },
    {
        nome: 'Thais',
        posicao: 'Atacante'
    },
    {
        nome: 'Abigail',
        posicao: 'Volante'
    },
    {
        nome: 'Rute',
        posicao: 'Lateral'
    },
];

console.log(jogadores);

function obtemNomeJogador (j) {
    return j.nome;
}

let nomesJogadores = jogadores.map(obtemNomeJogador);

console.log(nomesJogadores);
console.log(nomesJogadores[0]);
console.log(nomesJogadores[1]);
console.log(nomesJogadores[2]);
console.log(nomesJogadores[3]);

function obtemPosicaoJogador (j) {
    return j.posicao;
}

let posicaoJogadores = jogadores.map(obtemPosicaoJogador);

console.log(posicaoJogadores);
console.log(posicaoJogadores[0]);
console.log(posicaoJogadores[1]);
console.log(posicaoJogadores[2]);
console.log(posicaoJogadores[3]);


// Outra situação para utilizar método .map()

let notas = [7, 9, 2, 5, 4];
console.log(notas)

function aidcionaUmPonto (nota) {
    return nota +1;
}

let notasAtualizadas = notas.map(aidcionaUmPonto);

console.log(notasAtualizadas);


// Método filter()

function obtemVolante(jogador) {
    return jogador.posicao === 'Volante';
}

const volantes = jogadores.filter(obtemVolante);

console.log(volantes);

// foreach - para cada - exibe o resultado em cada linha separadamente do que você quiser que ele imprima

function exibirNomeJogador (jogador) {
    console.log(jogador.nome);
}

jogadores.forEach(exibirNomeJogador);
