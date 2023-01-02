let produtos = ['camiseta', 'calça', 'tênis'];

console.log(produtos);
console.log(produtos.length);

let cidades = ['Palhoça', 'Florianópolis', 'Goiânia', 'Guaraí'];

console.log(cidades);
console.log(cidades.length);
console.log(cidades[1]);


let jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gilz',
        posicao: 'Zagueiro'
    }
];

console.log(jogadores);
console.log(typeof jogadores[0]);

//Split

const email = 'natanaelsales@live.com';

let emailArray = email.split('@');

console.log(emailArray);
console.log(emailArray[1]);


const palavrasChave = 'cinema, futebol, TV, viagem, boliche';
const hobbies = palavrasChave.split(', ');

console.log(hobbies);

//tostring juntar tudo em uma cadeia de caracteres

const tipoHobbies = hobbies.toString();

console.log(tipoHobbies);
console.log(typeof tipoHobbies);

//join é o oposto de split, mas podemos colocar um carcter para juntar todas strings

const typeHobbies = hobbies.join(', ')

console.log(typeHobbies);
console.log(typeof typeHobbies);