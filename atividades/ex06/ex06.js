let bebida = prompt ("Escolheu: 1-café 2-chá 3-chocolate quente  4-água")

switch (bebida){
    case "1":
        console.log("Escolheu café");
        break;
    case "2":
            console.log("Escolheu chá");
        break;
    case "3":
        console.log("Escolheu chocolate quente");
    case "4":
        console.log("Escolheu água");
        break;

    default:
        console.log("Você não escolheu");
}