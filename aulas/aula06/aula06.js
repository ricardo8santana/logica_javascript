/*
O Switch/Case cria uma condicional que busca valores de igualdades para cada um dos valores buscados
Sitaxe:

switch (variavel){
    case "valor1":
        comandos
        case "valor2"
        comandos
}
O comando break faz uma quebra na estrutura, impedindo que o resto da  estrutura seja executada
*/

let opcao = prompt("Escolha: 1-Estudante 2-Professor 3-")

switch (opcao){
    case "1":
        console.log("Bem vindo estudante");
        break;
    case "2":
        console.log("Bem vindo Professor");
        break;
    case "3":
        console.log("Vamos fazer sua matricula!");
        break;
    default:
        console.log("Opção invalida");
}

/*
 1:Faça um programa que pergunte ao usuário qual bebida ele deseja:
   1 - café     2-chá      3-chocolate quente 4 - água

 2:Faça um programa que pegunate ao usuário como está o clima hoje
 (ex.: "Sol", "chuva", "nublado", "frio" ). Exiba uma mensagem difente 
 para cada situação, como dar dicas de roupas ou atividades.

 3- O usuário digita frase curtas como: "oi", "tchau", "obrigado" e 
 "ajuda". O programa deve responder de forma diferente para cada comando,
 como se fosse um mini chatbot.

  4 - O usuário escreve o horário do dia: "manhã", "tarde", "noite" ou "madrugada".
  O programa deve indicar a refeição correspondente: "Café da manhã", "almoço",
  "jantar" ou "lanche noturno".
*/