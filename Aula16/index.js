let nota1 = 8;
let nota2 = 8;

function media(n1, n2) {
    return (n1 + n2)/2;
}

let resultado = media(nota1, nota2);

console.log(resultado);

// if - se isso

if (resultado >= 8) {
    console.log(`Aprovado com LOUVOR, média ${resultado}!`);
} else if (resultado >= 6) {
    console.log(`Aprovado com média ${resultado}!`);
} else if (resultado >= 4) {
    console.log(`Em recuperação com média ${resultado}!`);
} else {
    console.log(`Reprovado com média ${resultado}!`);
}


if (nota1 ===0 || nota2 ===0) { // Ao menos uma deve ser verdadeira
    console.log(`Desclassificado, pois pelo menos uma das notas é igual a 0.`);
} else {
    console.log(`Classificado, pois ambas as notas são maiores que 0.`);
}

if (nota1 > 7 && nota2 > 7) { //Ambas as opções devem ser verdadeiras
    console.log(`Você obteve um excelente resultado.`);
} else {
    console.log(`Resultado razoável ou satisfatório.`);
}
