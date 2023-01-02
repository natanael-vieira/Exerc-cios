function calculaKmMilha() {
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609
}

let titulo = 'Introdução ao JavaScript';
let numPag = 500;

//Como objetos tem características 'no mundo real' dessa forma podemos escrever da seguinte forma

const livro = {
    titulo : 'Introdução ao JavaScript',
    numPage : 500
};

console.log(livro);
console.log(livro.titulo); //Mais comum de se usar é com '.' seguido da informação
console.log(livro.numPage);
console.log(livro['titulo']);
console.log(livro['numPage']);

livro.titulo = 'JavaScript - Avançado';
livro.numPage = 800;

console.log(livro.titulo);
console.log(livro.numPage);

livro.editora = 'Super Press';

console.log(livro);


const pessoa = {
    primeiroNome : 'Abigail',
    ultimoNome : 'Vieira',
    endereco : {
        rua : 'João de Barro',
        num : 219
    },
    nomeCompleto : function() {
        return this.primeiroNome + ' ' + this.ultimoNome;
    }
};

console.log(pessoa);
console.log(pessoa.endereco);
console.log(pessoa.endereco.rua);
console.log(pessoa.endereco.num);

console.log(pessoa.nomeCompleto);
console.log(pessoa.nomeCompleto());

pessoa.celular = '(48) 99128-6882'

console.log(pessoa.celular);

pessoa.enderecoCompleto = function() {
    return `Rua ${this.endereco.rua}, ${this.endereco.num}.`;
};

console.log(pessoa.enderecoCompleto());

function exibirDadosPessoa(p) {
    console.log(`\n
    Nome: ${p.nomeCompleto()}\n
    Endereço: ${p.enderecoCompleto()}\n
    Celular: ${p.celular}
    `);
} //Neste caso aqui poderiamos tanto colocar como um alert os dados para serem exibidos como o console.log como foi definido dentro da função

exibirDadosPessoa(pessoa);
