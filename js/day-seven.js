let btn = document.querySelector('.btn');
let pergunta = null

btn.addEventListener("click", () => {
    do {

        pergunta = prompt("Informe a operação desejada: \n\n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Sair");

        if (pergunta == 5) {
            alert("Até a próxima!");
            return;
        }

        let numero1 = prompt("Informe o primeiro número");
        let numero2 = prompt("Informe o segundo número");

        switch (pergunta) {
            case "1":
                alert(somar(numero1, numero2));
                break;

            case "2":
                alert(subtrair(numero1, numero2));
                break;

            case "3":
                alert(multiplicar(numero1, numero2));
                break;

            case "4":
                alert(dividir(numero1, numero2));
                break;
        }

    } while (pergunta != 5)

})

function somar(a, b) {
    return parseInt(a) + parseInt(b)
}

function subtrair(a, b) {
    return parseInt(a) - parseInt(b)
}

function multiplicar(a, b) {
    return parseInt(a) * parseInt(b)
}

function dividir(a, b) {
    return parseInt(a) / parseInt(b)
}