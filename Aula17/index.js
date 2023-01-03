// Operador ternário condicional - 3 operandos

let nota1 = 9;
let nota2 = 9;

function media (n1, n2) {
    console.log((n1 + n2) /2);
    return (n1 + n2) / 2;
}

let resultado = media(nota1, nota2);

let situacao = resultado >= 6 ? 'Aprovado' : 'Reprovado';

console.log(situacao);

// Isso seria exatamente a mesma coisa se estive realizando no if else

if (resultado >= 6) {
    situacao = 'Aprovado';
} else {
    situacao = 'Reprovado';
}

console.log (situacao);

// Quando há uma quantidade grande de linhas de códigos porque fica mais simples para ler o código, caso seja menos quantidade de linhas será mais fácil usar o operador ternário.

// Podemos encadear sequências de ternários, assim como em if else

let sit = (resultado >= 6) ? `Aprovado com média ${resultado}` : 
          (resultado >= 4) ? `Em recuperação com média ${resultado}` :
                             `Reprovado com média ${resultado}`; 

console.log(sit);


//Novamente seria exatamente a mesma coisa que isso aqui:

if (resultado >= 6) {
    sit = `Aprovado com média ${resultado}`;
} else if (resultado >=4) {
    sit = `Em recuperação com média ${resultado}`;
} else{
    sit = `Reprovado com média ${resultado}`;
}

console.log(sit);



// switch()

let opcao = 3;

switch (opcao) {
    case 1: 
        console.log('Entrega do tipo econômica em até 10 dias úteis.');
        break;
    case 2: 
        console.log('Entrega do tipo normal em até 3 dias úteis.');
        break;
    case 3: 
        console.log('Entrega do tipo expressa em até 1 dia útil.');
        break;
    default: 
        console.log('Opção de entrega inválida.');
}



opcao = 'olá';

switch (opcao) {
    case 'economica': 
        console.log('Entrega do tipo econômica em até 10 dias úteis.');
        break;
    case 'normal': 
        console.log('Entrega do tipo normal em até 3 dias úteis.');
        break;
    case 'expressa': 
        console.log('Entrega do tipo expressa em até 1 dia útil.');
        break;
    default: 
        console.log('Opção de entrega inválida.');
}
