function calculaKmMilha() {
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609
}

//Strings - Não tem diferença utilizar aspas simples ou compostas

let nome = 'Ana';

nome = "Rute";

let idade = 24;

let conc = nome + ', ' + idade + ' ' + 'semanas'
conc = `${nome}, ${idade} semanas.`;

console.log(typeof nome);
console.log(conc);

console.log(conc.length);
console.log(conc.toUpperCase());
console.log(conc.toLowerCase());

let localizacao = 'Palhoça - SC';
let estado = localizacao.substring(10,12); //Para que eu queira que exiba o último caracter eu preciso colocar um número acima para que ele seja exibido, ou apenas colocar o número inicial do ponto que preciso.
//Uma outra maneira de exibir a mesma informação seria utilizar o método length, que ficaria assim:
// localizacao.substring(localizacao.length-2);
//Dessa forma não precisaríamos saber a quantidade de caracteres e colocar os números específicos.

console.log(estado)

let x = '3.5';
let y = 4.2;

let resultado = x+y;

console.log(typeof resultado);


const frase = 'Minha cor favorita é: preta';
const indice = frase.indexOf(':');

console.log(indice);

const cor = frase.substring(indice+2);

console.log(cor);


let texto = 'basquete';
let novoTexto = texto.replace('bas','ra');

console.log(novoTexto);
console.log(texto);


let ifrase = 'A festa ocorrerá no primeiro dia do primeiro mês';
let novaFrase = ifrase.replaceAll('primeiro', 'segundo'); // Neste caso como usei All junto com replace, ele vai subsittuir todas as palavras e não apenas a primeira ocorrência como é no caso sem o 'All'.

console.log(ifrase);
console.log(novaFrase);