let frase = prompt("1-oi 2-tchau 3-obrigado 4-ajuda");

switch (frase){
 case "oi":
    console.log("Como vai?");
    break;
 case "tchau":
    console.log("até amanhã");
    break;
case "obrigado":
    console.log("pelo presente");
    break;
case "ajuda":
    console.log("obrigado pela ajuda");
    break;
default:
    console.log("opção inválida");
}