let idade = parseInt(prompt("Digite sua idade"));
    if(idade < 12){
        alert("Menor que 12 criança");
    }else if(idade >=12 && idade <17){
        alert("Adolescente")

    }else if (idade >=18 && idade <59){
        alert("Adulto")
    }else{
        alert("Idoso")
    }