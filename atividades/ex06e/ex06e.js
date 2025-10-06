let classificação = parseInt(prompt("Qual a  classificação"));

if(classificação <= 12){
    alert("Recomendado para crianças");
}else if(classificação > 12 && classificação <= 15 ){
    alert("Permitido para adolescentes");
}else{
    alert("Permitido apenas para maiores de 16")
}