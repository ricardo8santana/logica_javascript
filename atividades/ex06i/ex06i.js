let media = parseFloat(prompt("Qual a sua nota?"));

if(media < 4){
    alert("Reprovado direto");
}else if(media > 4 && media < 5.9){
    alert("recuperação");
}else{
    alert("Aprovado com merito");
}