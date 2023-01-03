const lista = document.querySelector('#lista');

const elementoP = document.createElement('p');
elementoP.textContent = '';
lista.appendChild(elementoP)

const elementoLi = document.createElement('li');
elementoLi.textContent = 'Um novo item na lista.';
lista.appendChild(elementoLi);

const filhosDaLista = lista.querySelectorAll('li');

// for(filho of filhosDaLista){
//     lista.removeChild(filho);
// }

//lista.className = 'novoponteiro';

//lista.setAttribute('class', 'novoponteiro');

//lista.removeAttribute('class');

lista.style.color = 'white';

console.log(lista);

const botao = document.querySelector('button');

botao.addEventListener('click', function () {
    //lista.remove();
}

);