let jogador = prompt("Lance o dado: 1|2|3|4|5|6");

switch (jogador){
    case "1":
        console.log("Você perdeu o jogo");
        break;
    case "2":
    case "3":
        console.log("Avance uma 1 casa");
        break;
    case "4":
    case "5":
        console.log("Avance 2 casas");
        break;
    case "6":
        console.log("Jogue novamente");
    default:
        console.log("numero invalido");
  
}

