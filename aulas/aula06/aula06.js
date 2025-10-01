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
/*
1. Leia a classificação indicativa de um filme (um número) e mostre:
    Se for menor que 12 → "Não recomendado para crianças".
    Entre 12 e 15 → "Permitido para adolescentes".
    Maior ou igual a 16 → "Permitido apenas para maiores de 16".
2. Um cliente digita o lanche e o programa precisa mostrar as calorias: "Hambúrguer" |
    "Batata frita" | "Refrigerante" | "Sorvete". Mostre o item escolhido.
3. Leia a velocidade de um carro e mostre:
    Se for até 60 km/h → "Dentro do limite". | Entre 61 e 80 km/h → "Atenção,
    perto do limite!". Acima de 80 km/h → "Multa por excesso de velocidade".
4. O jogador lança um dado (número de 1 a 6). Mostre a mensagem:
    1 → "Você perdeu a vez" | 2 ou 3 → "Avance 1 casa" | 4 ou 5 → "Avance 2 casas"
    6 → "Jogue novamente"
5. Leia a média final de um aluno: Menor que 4 → "Reprovado direto"
    Entre 4 e 5,9 → "Recuperação" | Entre 6 e 8 → "Aprovado" | Acima de 8 → "Aprovado
    com mérito"


*/