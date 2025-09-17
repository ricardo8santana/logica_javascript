/*
Operadores Lógicos: os operadores logicos servem para combinar mais de uma operação booleana. 
Todo resultado de um operador booleano logico é também um booleano.

Operador AND --> && : Para que o resultado neste operador seja TRUE, 
                     é necessário que todas as comparações seja TRUE. Se pelo menos uma 
                     comparação for FALSE todo o resultado será FALSE.
OR --> || : Para que o resultado neste operador seja FALSE, é necessario que todas as 
            comparações sejam FALSE. Se pelo menos uma comparação for TRUE, todo o meu 
            resultado será TRUE.

*/

/* O console.log() serve para exibir uma mensagem no console de navegador,
 essa forma exibição é muito utilizada pela comunidade para debugar o código
*/

console.log("Tabela verdade: && (AND)");
console.log("true && true = ", true && true);
console.log("true && false = ", true && false);
console.log("false && true = ", false && true);
console.log("false && false = ", false && false);

console.log("Tabela verdade: || (OR)");
console.log("true ||true = ", true || true);
console.log("true || false = ", true || false);
console.log("false || true = ", false || true);
console.log("false || false = ", false || false);


/*
Ex01: Faça um programa que verifique se a pessoa pode pagar meia em um ingresso de cinema. 
Para pagar meia a pessoa  precisa ser estudante ou maior de 60 anos.

Ex02: Faça um programa que receba um usuario e uma senha e diga se ele  pode acessar o sistema. 
Considere o user "admin" e a senha "senac"

Ex3: Faça um programa que verifique se a pessoa  terá desconto em sua compra. Requisitos:
Cliente VIP
Compra 150 reais ou mais

Ex4: Crie um progrma que verifique se uma pessoa pode emprestar um livro na biblioteca.
Para isso ele precisa:
Ter Carteirinha
Não ter Multa

EX: Crie um programa que verifique se uma  pessoa pode jogar Requisitos para jogar:
    Ter internet / Controle / Tempo não estar estudando!

*/
