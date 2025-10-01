let dia = prompt("Qual horário do dia: manhã -tarde -noite -madrugada")

switch (dia){
    case "manhã":
        console.log("Café da manhã");
        break;
    case "tarde":
        console.log("almoço");
        break;
    case "noite":
        console.log("jantar");
        break;
    case "madrugada":
        console.log("lanche noturno");
        break;
    default:
        console.log("opção invalida");

}