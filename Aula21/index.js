const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector("#caixaDeTexto");
const botaoAdicionar = document.querySelector('#botaoAdicionar');

//Listener - sempre que o botao adicionar for clicado, adiciona um item ou uma tarefa
botaoAdicionar.addEventListener('click', function () {
    const textoDatarefa = caixaTexto.value;
    caixaTexto.value = '';

    listaTarefas.appendChild(adicionaTarefa(textoDatarefa));
    caixaTexto.focus();
}
);

function adicionaTarefa(textoDatarefa) {
    const elementoLi = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDatarefa;

    elementoLi.className = 'naoRealizada';
    elementoLi.appendChild(elementoSPAN);
    elementoLi.appendChild(acidicionarBotaoRemover());

    //Listener - Sempre que um item do mouse for clicado altera o marcador, a cor da fonte e risca o texto
    elementoSPAN.addEventListener('click', function () {
        if (this.id === 'tarefa') {
            if (this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
    }
    );

    return elementoLi;
}

function acidicionarBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '⊗';
    botaoRemover.className = 'remover'

    //Listener - sempre que o botão remover for clicado, será removido um item da lista
    botaoRemover.addEventListener('click', function () {
        listaTarefas.removeChild(this.parentNode);
    }
    );

    return botaoRemover;
}