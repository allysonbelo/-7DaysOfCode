let btn = document.querySelector(".btn");

let listaDeFruta = [];
let listaDeLaticinios = [];
let listaDeCongelados = [];
let listaDeDoces = [];
let listaDeOutros = [];
let pergunta = '';

btn.addEventListener('click', () => {

    do {


        if (listaDeFruta.length === 0 && listaDeLaticinios.length === 0 && listaDeCongelados.length === 0 && listaDeDoces.length === 0 && listaDeOutros.length === 0) {

            pergunta = prompt('Deseja adicionar algum item a lista? (S/N)');

            if (pergunta === 'S' || pergunta === 's') {
                let item = prompt('Digite o item que deseja adicionar');
                let tipo = prompt('Digite o tipo do item:\nFruta, Laticínio, Congelado, Doces ou Outros');

                switch (tipo) {
                    case 'fruta':
                    case 'Fruta':
                        adicionar(item, tipo);
                }
            }

        } else {
            pergunta2 = prompt('1 - Adicionar item\n2 - Remover item\n3 - Listar itens\n4 - Sair');

            if (pergunta2 == "1") {
                let item = prompt('Digite o item que deseja adicionar');
                let tipo = prompt('Digite o tipo do item:\nFruta, Laticínio, Congelado, Doces ou Outros');
                adicionar(item, tipo)
            }

            if (pergunta2 == "2") {
                let item = prompt('Digite o item que deseja adicionar');
                removerItem(item)
            }

            if (pergunta2 == "3") {
                lista();
            }

            if (pergunta2 == "4") {

                alert('Frutas: ' + listaDeFruta + '\nLaticínios: ' + listaDeLaticinios + '\nCongelados: ' + listaDeCongelados + '\nDoces: ' + listaDeDoces + '\nOutros: ' + listaDeOutros);

                break;
            }
        }

        if (pergunta === 'N' || pergunta === 'n') {
            lista();
        }

    } while (pergunta == 'sim' || pergunta == 'Sim' || pergunta == 's' || pergunta == 'S');


    function adicionar(item, categoria) {

        switch (categoria) {
            case 'fruta':
            case 'Fruta':
                listaDeFruta.push(item);
                break;

            case 'laticinio':
            case 'Laticinio':
                listaDeLaticinios.push(item);
                break;

            case 'congelado':
            case 'Congelado':
                listaDeCongelados.push(item);
                break;

            case 'doce':
            case 'Doce':
                listaDeDoces.push(item);
                break;

            case 'outros':
            case 'Outros':
                listaDeOutros.push(item);
                break;
        }
    }
})

function removerItem(item) {
    for (let i = 0; i < listaDeFruta.length; i++) {
        if (item === listaDeFruta[i]) {
            listaDeFruta.splice(listaDeFruta.indexOf(item), 1)
            alert(`O item ${item} foi removido com sucesso!`);
        }
    }

    for (let i = 0; i < listaDeLaticinios.length; i++) {
        if (item === listaDeLaticinios[i]) {
            listaDeLaticinios.splice(listaDeLaticinios.indexOf(item), 1)
            alert(`O item ${item} foi removido com sucesso!`);
        }
    }

    for (let i = 0; i < listaDeCongelados.length; i++) {
        if (item === listaDeCongelados[i]) {
            listaDeCongelados.splice(listaDeCongelados.indexOf(item), 1)
            alert(`O item ${item} foi removido com sucesso!`);
        }
    }

    for (let i = 0; i < listaDeDoces.length; i++) {
        if (item === listaDeDoces[i]) {
            listaDeDoces.splice(listaDeDoces.indexOf(item), 1)
            alert(`O item ${item} foi removido com sucesso!`);
        }
    }

    for (let i = 0; i < listaDeOutros.length; i++) {
        if (item === listaDeOutros[i]) {
            listaDeOutros.splice(listaDeOutros.indexOf(item), 1)
            alert(`O item ${item} foi removido com sucesso!`);
        }
    }
}

function lista() {
    alert('Frutas: ' + listaDeFruta + '\nLaticínios: ' + listaDeLaticinios + '\nCongelados: ' + listaDeCongelados + '\nDoces: ' + listaDeDoces + '\nOutros: ' + listaDeOutros);
}