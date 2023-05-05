//CODIGO AQUI

console.log("Prática 1 - Aritmética")
// Passo 1
let saldo = 15
console.log("Saldo inicial =",saldo);
// Passo 2
let entrada1 = 22.40
saldo += entrada1
console.log("Entrada =",saldo)
// Passo 3
let saida1 = 12.34
saldo -= saida1
console.log("Saída =",saldo);
// Passo 4
let divisao1 = 2
saldo /= divisao1
console.log("Após dividir com o irmão =",saldo)
// Passo 5
let aplicacao1 = 3.4
saldo *= aplicacao1
console.log("Após rendimento de 3,4x =",saldo);
// Passo 6
saldo = saldo % 3
console.log(saldo);

// ou fazer assim abaixo
let saldo2 = 15
console.log(saldo2);
saldo2 += 22.40
console.log(saldo2);
saldo2 -= 12.34
console.log(saldo2);
saldo2 /= 2
console.log(saldo2);
saldo2 *= 3.4
console.log(saldo2);
saldo2 %= 3
console.log(saldo2);


console.log("Prática 1 - Precedência matemática")
console.log("2 x 2 + 2 =",2 * 2 + 2);
console.log("2 x (2 + 2) =",2 * (2 + 2));


console.log("Prática 2 - Igual e Diferente")
const teste1 = 5 === 5
console.log("true",teste1);
// 5 é de fato igual a 5, então true
const teste2 = 5 !== 5
console.log("false",teste2);
// 5 não é diferente de 5, então false
const teste3 = 5 !== "5" 
console.log("true",teste3);
// aqui 5 Number é diferente de 5 String? Como número seria false, mas como tipo a resposta é True
const teste3v2 = 5 != "5"
console.log("false",teste3v2);
// aqui ao suprimirmos um igual, a comparação se deu apenas pelo número, então como eles são iguais (5 e 5), o resultado é False
// Concluindo, um igual dá o resultado de uma operação, dois iguais compara apenas o valor, três iguais compara o valor e também o tipo (Number ou Strings)
const teste4 = "5" === "cinco"
console.log("false",teste4);
// aqui o tipo até é igual, são Strings, mas o valor é diferente, pois um é de fato número, e o outro apesar de ser o mesmo número, está escrito por extenso.
const teste4v2 = "cinco" === "cinco"
console.log("true",teste4v2);
// aqui bate o tipo e o valor do conteúdo, então true
const teste4v3 = "5" === "5"
console.log("true",teste4v3);
// aqui mesmo caso acima, bate o tipo (String e String), e os números são os mesmos, então true
const teste5 = typeof 5 === typeof 20
console.log("true",teste5);
// aqui ele está comparando o tipo, então como é Number e Number, a resposta é True
const teste6 = typeof "5" === typeof "cinco"
console.log("true",teste6);
// aqui ele também está comparando o tipo, então como é String e String, a resposta tbm é True


console.log("Prática 3 - Menor e Maior (ou igual)")
const numero1 = 5
const numero2 = 10

console.log("Teste 1 - F =",numero1 >= numero2);
console.log("Teste 2 - T =",numero1 <= numero2);
console.log("Teste 3 - F =",numero1 > numero2);
console.log("Teste 4 - T =",numero1 < numero2);
