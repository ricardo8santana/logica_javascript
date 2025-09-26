let temperatura = parseFloat(prompt("Digite a temperatura"));
    if(temperatura < 18){
        alert("Temperatura frio");
    }else if(temperatura >= 18 && temperatura <= 30){
        alert("Temperatura agradável");
    }else{
        alert("Temperatura quente");
    }