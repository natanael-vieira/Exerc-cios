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
