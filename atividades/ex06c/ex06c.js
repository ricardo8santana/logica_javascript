let frase = prompt("oi -tchau -obrigado -ajuda");

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