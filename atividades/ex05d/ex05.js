let media = parseFloat(prompt("Qual a media do aluno?"));

if (media < 4){
    alert("Aluno reprovado");
}else if (media >= 4 && media <= 5.9){
    alert("Aluno de recuperação");
}else if (media >= 6 && media <= 8){
    alert("Aluno aprovado");
}else{
    alert ("Aprovado com merito");
} 