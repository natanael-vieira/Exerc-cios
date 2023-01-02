// Caso eu crie um arry vazio, eu posso adicionar vários 'ítens' utilizando o método push, que sempre adiciona um novo item no final do array

const cidades = [];

console.log(cidades);


cidades.push('Palhoça', 'Florianópolis');

console.log(cidades);

cidades.push('Goiânia', 'Guaraí');

console.log(cidades);

cidades.unshift('Londrina'); // sempre adiciona no início da lista, array

console.log(cidades);

//Método pop() remove o último elemento e ele tem retorno também o que podemos incluir ele em uma variável ou constante e exibimos o que foi excluído

let cidadeRemovida = cidades.pop();

console.log(cidades);
console.log(cidadeRemovida);

//Método shift(), remove o primeiro elemento e também tem retorno do método

cidadeRemovida = cidades.shift();

console.log(cidades)
console.log(cidadeRemovida);

cidades.push('Guaraí');
cidades.push('Londrina');

console.log(cidades);

// Método splice() exlcui um elemento ou mais, porém utilizando índice

const indice = cidades.indexOf('Londrina');

console.log(indice);

cidades.splice(indice,5);

console.log(cidades);

//concat() - concatenação de arrays

const cidadesInterior = ['Joinville', 'Blumenau', 'Itajaí'];
const regioesMetropolitanas = ['Palhoça', 'São José'];

const cidadesInteriorEMetropolitana = cidadesInterior.concat(regioesMetropolitanas);

console.log(cidadesInterior);
console.log(regioesMetropolitanas);
console.log(cidadesInteriorEMetropolitana);

console.log(cidadesInteriorEMetropolitana.indexOf('Biguaçu')); // Como não foi cadastrada anteriormente essa cidade, ele irá retornar no console o valor -1
