document.querySelector('#t1').textContent = 'JavaScript - Introdução';
document.querySelector('#t2').textContent = 'Exemplificando a funcionalidade de .querySelector';

/*const nome = prompt('Qual é o seu nome?');

alert(`Que bom ter você aqui ${nome}! \nVamos começar!`)*/

//Função para exibir mensagem de boas-vindas e esconder o formulário
function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome}! Seja bem-vindo!`);
    document.getElementById('formularioLogin').style.display = 'none';
}

function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}

//====================================================================================

// let, function, if, else, while, for ... são palavras reservadas, não pode ser usadas como uma variável

let a;
console.log(a); // aparece no console apenas undefined

a = 3;
console.log(a); // neste caso aparece o 3 porque o x já foi declarado

let primeiroNome = 'Abigail';
console.log(primeiroNome);

primeiroNome = 'Rute'; // sobrescreveu o valor anterior, quando se declara a uma mesma função outro valor
console.log(primeiroNome);


let endereco = 'R. João de Barro';
console.log(endereco);

let b, c;

b = 15; 
c = 7;

let soma = b+c;
console.log(soma)

b = 13;
c = 21;

soma = b+c;
console.log(soma)

// constante, não altera o valor dentro da variável, ou seja se torna uma constante, por isso uar o const
const pi = 3.1416;
let raio = 3;
let comprimentoCircunferencia = 2*pi*raio;

console.log(comprimentoCircunferencia)