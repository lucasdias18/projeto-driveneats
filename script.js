function selecionarComida(botao) {
    let naoselecionado = document.querySelectorAll('.comida > div');
    for (let i=0; i<naoselecionado.length; i++) {
        naoselecionado[i].classList.remove('selecionado');
    }
    botao.classList.add('selecionado')
    let elementos = document.querySelectorAll('.selecionado');
    if (elementos.length === 3) {
        let button1 = document.querySelector('footer>button');
        button1.classList.add('escondido')
        let button2 = document.querySelector('.escondido');
        button2.classList.remove('escondido')
    }
}

function selecionarBebida(botao) {
    let naoselecionado = document.querySelectorAll('.bebida > div');
    for (let i=0; i<naoselecionado.length; i++) {
        naoselecionado[i].classList.remove('selecionado');
    }
    botao.classList.add('selecionado')
    let elementos = document.querySelectorAll('.selecionado');
    if (elementos.length === 3) {
        let button1 = document.querySelector('footer');
        button1.firstChild.classList.add('escondido')
        // let button2 = document.querySelector('.escondido');
        button1.lastChild.classList.remove('escondido')
    }
}

function selecionarSobremesa(botao) {
    let naoselecionado = document.querySelectorAll('.sobremesa > div');
    for (let i=0; i<naoselecionado.length; i++) {
        naoselecionado[i].classList.remove('selecionado');
    }
    botao.classList.add('selecionado')
    let elementos = document.querySelectorAll('.selecionado');
    if (elementos.length === 3) {
        let button1 = document.querySelector('footer>button');
        button1.classList.add('escondido')
        let button2 = document.querySelector('.escondido');
        button2.classList.remove('escondido')
    }
}