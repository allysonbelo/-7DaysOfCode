let btn_jogar = document.querySelector(".btn");

btn_jogar.addEventListener('click', () => {

    let numero = Math.floor(Math.random() * 10) + 1;
    let numeroDeTentativas = 3;

    for (let i = 0; i < 3; i++) {

        alert("Você tem " + numeroDeTentativas + " tentativa(s)");
        let numeroEscolhido = prompt("Escolha um número de 1 à 10");

        if (numeroEscolhido == numero) {
            alert("Parabéns, você acertou! \n O número era " + numero);
            break
        } else {
            alert("Você errou!");
            numeroDeTentativas--;
        }

        if (numeroDeTentativas == 0) {
            alert("Você perdeu!");
            break
        }
    }
});