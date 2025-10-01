let bebida = prompt ("Escolheu: 1-café 2-chá 3-chocolate quente  4-água")

switch (bebida){
    case "café":
        console.log("Escolheu café");
        break;
    case "chá":
            console.log("Escolheu chá");
        break;
    case "chocolate":
        console.log("Escolheu chocolate quente");
    case "água":
        console.log("Escolheu água");
        break;

    default:
        console.log("Você não escolheu");
}