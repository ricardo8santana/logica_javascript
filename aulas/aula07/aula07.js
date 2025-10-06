// let numero = parseInt(prompt("Digite um numero:"));

// while(numero >= 10){
//     console.log(numero);
//     numero = numero - 1;
// }

let palavraSecreta = prompt("Digite a palavra secreta");

while(palavraSecreta != 'abracadabra'){
    palavraSecreta = prompt("Você errou! Tente novamente");
}
alert("Acertou miseravi");