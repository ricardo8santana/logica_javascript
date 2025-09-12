/*
Variaveis - tipos de dados:
    inteiro --> int: este tipo serve para armazenar números inteiros
        ex: 1 | 2 | 20 | 100
    real --> float: este tipo serve para armazenar números reais
        ex: 1.5 |6.9 | 95.5|
             obs: aqui devemos sempre usar o ponto (.) e não virgula (,)
    string --> texto: este tipo serve para armazenar textos
        ex: "maçã" | "Maria" | "Senac SP"
            obs: Toda string precisa de aspas, elas podem ser simples ('') ou duplas ("")
    boolean --> boleano: este tipo serve para armazenar valores booleanos
        ex: true | false
*/

/*
Tipos de variaveis:
var --> variaveis que podem sofrer alteração de valores, porem não respeitam o escopo.
let --> variaveis que podem sofrer alterações de valores e ao mesmo tempo respeitam o escopo.
const --> variaveis que Não podem ter o valor alterado e ao mesmo tempo respeitam o escopo.
*/

let nome = "Ricardo";
alert(nome);
nome = "Luis Ricardo";
alert(nome);

const idade = 20;
alert(idade);

// idade = 80;
// alert(idade);

var estudo = true;
alert(estudo);

estudo = false;
alert(estudo);