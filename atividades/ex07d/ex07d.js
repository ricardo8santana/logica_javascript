let valorSaque = parseInt(prompt("Qual o valor do saque?"));
let saldo = 150;
while(valorSaque > saldo){
    saldo = saldo - valorSaque;
    console.log("Saque realizado com sucesso");
}