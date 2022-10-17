function selecionarComida(botao) {
    let naoselecionado = document.querySelectorAll('.comida > div');
    for (let i=0; i<naoselecionado.length; i++) {
        naoselecionado[i].classList.remove('selecionado');
    }
    botao.classList.add('selecionado')
    let elementos = document.querySelectorAll('.selecionado');
    if (elementos.length === 3) {
        let button = document.querySelector('footer');
        button.innerHTML = `<button class="fechar-pedido" onclick="fecharPedido()">Fechar pedido</button>`
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
        let button = document.querySelector('footer');
        button.innerHTML = `<button class="fechar-pedido" onclick="fecharPedido()">Fechar pedido</button>`
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
        let button = document.querySelector('footer');
        button.innerHTML = `<button class="fechar-pedido" onclick="fecharPedido()">Fechar pedido</button>`
    }
}

function fecharPedido() {

    // PREÇO

    const elemento = document.querySelectorAll('.selecionado>.preço>.valor');
    // console.log(elemento)
    let preçoTotal = 0;
    for (let i=0; i<elemento.length; i++) {
        let preçoUnidade = elemento[i].innerHTML
        // console.log(preçoUnidade)
        let x = Number(preçoUnidade.replace(',', '.'));
        // console.log(typeof(x))
        preçoTotal = preçoTotal + x;
        // console.log(preçoTotal)
    }

    // COMIDA

    const comida = document.querySelector('.comida>.selecionado>h2')
    let nomeComida = comida.innerHTML

    // BEBIDA

    const bebida = document.querySelector('.bebida>.selecionado>h2')
    let nomeBebida = bebida.innerHTML

    // SOBREMESA

    const sobremesa = document.querySelector('.sobremesa>.selecionado>h2')
    let nomeSobremesa = sobremesa.innerHTML

    // MENSAGEM WPP

    let pedidoFinal = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${nomeComida}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${preçoTotal.toFixed(2).replace('.', ',')}`)

    window.open(`https://wa.me/5521999999999?text=` + pedidoFinal)
}