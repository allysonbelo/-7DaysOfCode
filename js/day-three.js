const testarCondicao = document.querySelector("#testar");

testarCondicao.addEventListener("click", function () {
    let frontOuBack = prompt("Escolha uma área: \n 1 - Front-end \n 2 - Back-end");
    switch (frontOuBack) {
        case frontOuBack = "1":
            let frontEnd = prompt("Você quer aprender: \n 1 - React  \n 2 - Vue ");
            while (frontEnd) {
                let frontEnd = prompt("Você quer se especializar em: \n 1 - Front-end \n Ou \n 2 - Se tornar Fullstack");
                switch (frontEnd) {
                    case frontEnd = "1":
                        alert("Ser especialista em Front-end é uma boa escolha!");
                        break;

                    case frontEnd = "2":
                        alert("Fullstack embaralha minha cabeça!");

                    default:
                        break;
                }
                break;
            }
            break;

        case frontOuBack = "2":
            let backEnd = prompt("Você quer aprender: \n 1 - C#  \n 2 - Java ");
            while (backEnd) {
                let backEnd = prompt("Você quer se especializar em: \n 1 - Back-End \n Ou \n 2 - Se tornar Fullstack");
                switch (backEnd) {
                    case backEnd = "1":
                        alert("Tudo bem se você quiser aprender Back, mas eu vou correndo para o Front :)!");
                        break;

                    case backEnd = "2":
                        alert("Fullstack embaralha minha cabeça!");

                    default:
                        break;
                }
                break;
            }
            break;

        default:
            alert("Não foi escolhido nenhuma área");
            break;
    }

    let linguagens = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");
    let listaDelinguagens = [];
    listaDelinguagens.push(linguagens);
    while (linguagens) {
        let escolha = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
        listaDelinguagens.push(escolha);
        console.log(listaDelinguagens);
        if (escolha == "não" || escolha == "" || escolha == null) {
            if (listaDelinguagens.length >= 1) {
                let arr = listaDelinguagens.join(" - ");
                alert("As linguagens que você escolheu: " + arr + " São legais também!");
            }
            break
        }

    }
});