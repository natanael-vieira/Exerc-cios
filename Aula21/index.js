const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector("#caixaDeTexto");
const botaoAdicionar = document.querySelector('#botaoAdicionar');

botaoAdicionar.addEventListener('click', function(){
    const textoDatarefa = caixaTexto.value;
    caixaTexto.value = '';

    listaTarefas.appendChild(adicionaTarefa(textoDatarefa));
    caixaTexto.focus();
}
);

function adicionaTarefa (textoDatarefa) {
    const elementoLi = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDatarefa;

    elementoLi.appendChild(elementoSPAN);
    elementoLi.appendChild(acidicionarBotaoRemover());

    return elementoLi;
}

function acidicionarBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '⊗';
    botaoRemover.className = 'remover'

    console.log(listaTarefas);

    botaoRemover.addEventListener('click', function() {
        listaTarefas.removeChild(this.parentNode);
    }

    )

    return botaoRemover;
}