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


//Funções
//Declaração da função
function exibirMensagem() {
    alert('Olá, esta mensagem foi obtida a partir de uma função');
}

//Chamada da função
exibirMensagem();

function exibirMsg(primNome, segNome) {
    alert(`Olá, ${primNome} ${segNome}, esta função usa parâmetros para colocar seu nome na mensagem!`);
}

exibirMsg('Natanael', 'Vieira');
