let clienteVip = prompt("Você é Client vip");
let compra = parseFloat(prompt("Digite o valor da compra"));
verifica1 = clienteVip == "sim" || compra > 150;

alert("Você terá um desconto" + verifica1 );
