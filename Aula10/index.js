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

/*//Escopo ou limites das variáveis e constantes

let x = 10; // Aqui foi declarada uma variável global, por isso pode acessada dentro de outras funções dentro do arquivo inteiro

console.log(x)

function soma (a,b) {
    console.log(x);
    let z = a+b; // Aqui foi declarada uma variável local, ou seja, só pode ser acessada dentro da própria função.
    return z;
}

console.log(soma(13,8));


// Constante
const gravidade = 9.8;
console.log(gravidade);

function calculaVelocQuedaLivre(tempo) {
    const resultado = gravidade * tempo;
    return resultado;
}

console.log(calculaVelocQuedaLivre(30));

const resultado = 0;
console.log(resultado);*/


//Função interagindo com o HTML

function calculaKmMilha() {
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609
}