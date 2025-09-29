/*
O Switch/Case cria uma condicional que busca valores de igualdades para cada um dos valores buscados
Sitaxe:

switch (variavel){
    case "valor1":
        comandos
        case "valor2"
        comandos
}

*/

let opcao = prompt("Escolha: 1-Estudante 2-Professor 3-")

switch (opcao){
    case "1":
        console.log("Bem vindo estudante");
    case "2":
        console.log("Bem vindo Professor");
    case "3":
        console.log("Vamos fazer sua matricula!");
}
