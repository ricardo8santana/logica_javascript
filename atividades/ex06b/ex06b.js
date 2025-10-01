let clima = prompt("Como está o clima: 1 -Sol 2-chuva 3-nublado 4-frio")

switch (clima){
    case "sol":
        console.log("O dia está ensolarado");
        break;
    case "chuva":
        console.log("o clima está de chuva");
        break;
    case "nublado":
        console.log("O dia amnhaceu nublado");
        break;
    case "frio":
        console.log("A temperatura está abaixo de zero");
        break;
    default:
        console.log("")
}

