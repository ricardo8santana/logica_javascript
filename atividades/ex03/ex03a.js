let pessoaEstudante = prompt("Você é estudante?");
let idade = parseInt(prompt("Qual a sua idade?"))
verifica1 = pessoaEstudante  == "sim";
verifica2 = idade > 60;

alert("Pode pagar meia" + verifica1 || verifica2);