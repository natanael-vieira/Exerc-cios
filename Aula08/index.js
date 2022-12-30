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


//Tipos de dados

let x = 10; //tipo 'number'
x = 14.8;
let y; // tipo undefined porque ainda não foi atribuído nada

console.log(typeof x);
console.log(typeof y);

y = 'Olá!' // tipo 'string' - cadeia de caracteres

console.log(typeof y);

y = 13;

console.log(typeof y);

let visualizado = true; // tipo 'boolean' - assume verdadeiro ou falso

console.log(typeof visualizado);

visualizado = 'Bom';

console.log(typeof visualizado);


// Usando uma variável let eu posso atribuir outros valores normalmente, mas quando atribuo uma constante, neste caso o valor não poderá ser alterado, sempre dará erro.

visualizado = undefined;

console.log(typeof visualizado);

// Não é comum, mas pode-se alterar o tipo de variável para undefined, apenas declarando que a variável é undefined.
// TIPOS PRIMITIVOS: number, boolean, undefined, string

let k = 'casa';
let resultado = k + 3;

console.log(typeof k);
console.log(typeof resultado);

let n = 15;
let result = n + ' Olá';

console.log(typeof n);
console.log(typeof resultado);

let num = 17;
let vis = true; //Booleanos são conhecidos como números true = 1 e false = 0, por isso somando um boolean com um number ele é um typeof do tipo number

let res = num + vis;
console.log(typeof res);
