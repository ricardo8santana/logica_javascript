let clienteVip = prompt("Você é Client vip");
let desconto = parseFloat(prompt("Você gastor mais de 150 r"));
verifica1 = clienteVip == "sim";
verifica2 = desconto > 150;

alert("Você terá um desconto" + verifica1 || verifica2 );
