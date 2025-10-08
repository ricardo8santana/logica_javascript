let chute = parseInt(prompt("Adivinhe um número entre 1 a 100"));
 
while (chute != 15) {
    if (chute < 15) {
        alert(" Tente novamente maior:");
    } else{
        alert(" Tente novamente menor: ");
    }
    chute = parseInt(prompt("Adivinhe um número:"));
}
alert("Você acerto!")
