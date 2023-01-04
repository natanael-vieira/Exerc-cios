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

    elementoLi.className = 'naoRealizada';
    elementoLi.appendChild(elementoSPAN);
    elementoLi.appendChild(acidicionarBotaoRemover());

    elementoSPAN.addEventListener('click', function() {
        console.log(elementoLi)
        if(this.id === 'tarefa') {
            if(this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
    });

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