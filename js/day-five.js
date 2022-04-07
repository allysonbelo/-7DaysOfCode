const btn_lista = document.querySelector('.btn');

btn_lista.addEventListener('click', () => {

    let lisdaDeFruta = [];
    let listaDeLaticinios = [];
    let listaDeCongelados = [];
    let listaDeDoces = [];
    let listaDeOutros = [];
    let pergunta = ""

    do {
        pergunta = prompt("Deseja adicionar algum item na lista?");

        if (pergunta == "sim") {
            let nomeItem = prompt("Digite o nome do item");
            let categoriaItem = prompt("Digite a categoria do item\n\n Fruta\n Laticínios\n Congelados\n Doces\n Outros ");

            switch (categoriaItem) {
                case "Fruta":
                case "fruta":
                    lisdaDeFruta.push(nomeItem);
                    break;

                case "Laticínios":
                case "laticínios":
                    listaDeLaticinios.push(nomeItem);
                    break;

                case "Congelados":
                case "congelados":
                    listaDeCongelados.push(nomeItem);
                    break;

                case "Doces":
                case "doces":
                    listaDeDoces.push(nomeItem);
                    break;

                case "Outros":
                case "outros":
                    listaDeOutros.push(nomeItem);
                    break;
            }
        }

        if (pergunta == "não" || pergunta == "nao") {
            alert(` Lista de Frutas: ${lisdaDeFruta}\n\n Lista de Laticínios: ${listaDeLaticinios}\n\n Lista de Congelados: ${listaDeCongelados}\n\n Lista de Doces: ${listaDeDoces}\n\n Lista de Outros: ${listaDeOutros}`);
            break;
        }
    } while (pergunta == "sim");
});
