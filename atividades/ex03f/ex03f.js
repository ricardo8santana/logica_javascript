let pessoa = prompt("Tem internet");
let controle = prompt("Você tem controle do console?");
let tempo = prompt("Você tem tempo disponível?");
let estudo = prompt("Você está em horário de aula?");

verifica = pessoa =="sim" && controle == "sim" && tempo == "sim" && estudo == "sim";

 alert("Você  pode jogar!"+ verifica);