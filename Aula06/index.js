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

//====================================================================================
//Operadores Aritméticos

let somar = 6+9;
console.log(somar);

let nome = 'Abigail!';
let sauda = 'Olá ';

let msg = sauda + nome; //usando strings o operador + serve para concatenar, ou seja, juntar strings
console.log(msg);

msg = 'Olá ' + 'Rute! ' + 'Tudo bem?'
console.log(msg);

let result = 17- 13; // subtração
console.log(result)

result = 8*50 // multiplicação
console.log(result);

result = 12/3; // divisão
console.log(result);

console.log(21%4); // resto da divisão

console.log(4**2); // exponenciação


//Operadores de atribuição
let cor = 'amarelo';
console.log(cor);

let num = 3;
num *=5;
console.log(num);

console.log(num**=2)

console.log(num -=25);


//Operadores relacionais
let x = 15;
let y = 33;

console.log(x > y);
console.log(x > 10);
console.log(x < 10);
console.log(y >= 10);
console.log(y <= 10);


//Operadores de igualdade
let nota1 = 5;
let nota2 = 5;

console.log(nota1 == nota2);

nota2 = '5';
console.log(nota1 == nota2); //Não faz distinção entre número e string

console.log(nota1 === nota2); //Agora faz distinçção entre número e string