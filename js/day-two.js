let send = document.querySelector('#send');
let close = document.querySelector(".close");
let ask = document.querySelector('.ask');
let span__result = document.querySelector('#span__result');

send.addEventListener('click', function (e) {
    e.preventDefault()

    let modal = document.querySelector('.modal');
    modal.classList.toggle("active");

    let name = document.querySelector('#name').value;
    let number = document.querySelector('#number').value;
    let language = document.querySelector('#language').value;

    span__result.innerHTML = `"Olá ${name}, você tem ${number} anos e já está aprendendo ${language}!"`;

    setTimeout(function () {
        let wrapper_ask = document.querySelector('#ask');
        wrapper_ask.style.display = "block";
        ask.innerHTML = `Você gosta de estudar ${language}? Responda SIM ou NÃO.`
    }, 3000);
})

close.addEventListener('click', function (e) {
    e.preventDefault()

    let modal = document.querySelector('.modal');
    modal.classList.toggle("active");

})

let btn_sim = document.querySelector('.btn-sim');
let btn_nao = document.querySelector('.btn-nao');

btn_sim.addEventListener('click', function (e) {
    e.preventDefault()

    span__result.innerHTML = "Muito bom! Continue estudando e você terá muito sucesso.";
    ask.style.display = "none";
    let wrapper__btn = document.querySelector('.wrapper__btn');
    wrapper__btn.style.display = "none";
})

btn_nao.addEventListener('click', function (e) {
    e.preventDefault()

    span__result.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?";
    ask.style.display = "none";
    let wrapper__btn = document.querySelector('.wrapper__btn');
    wrapper__btn.style.display = "none";
})