let lanche = prompt("Escolha seu lanche: Hambúrguer - Batata frita - Refrigerante - Sorvete");

switch (lanche){
    case "Hambuguer":
        console.log("Hambúrguer Aproximadamente 290 a 311 calorias. ");
        break;
    case "Batata frita":
        console.log("batata frita  aproximadamente 320 calorias.");
        break;
    case "Refrigerante":
        console.log("Refrigerante  pode ter aproximadamente 105 calorias,");
        break;
    case "Soverte":
        console.log("Sorvete  podem chegar a 150 kcal por bola");
        break;
    default:
        console.log("Você digitou errado!")
}