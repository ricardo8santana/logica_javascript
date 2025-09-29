let dia = prompt("1-manhã 2-tarde 3-noite 4-madrugada")

switch (dia){
    case "1":
        console.log("Café da manhã");
        break;
    case "2":
        console.log("almoço");
        break;
    case "3":
        console.log("jantar");
        break;
    case "4":
        console.log("lanche noturno");
        break;
    default:
        console.log("opção invalida");

}