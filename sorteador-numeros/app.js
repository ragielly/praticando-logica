function sortearNumero(){
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);


    if( de >= ate ){
        alert('Numero informado no campo "Do numero:" é maior que a do campo "Até o numero:".Verifique!');
    }
    
    if(quantidade > (ate - de + 1 )){        
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    }


    let numerosSorteados = [];
    let numero;

    for(let i = 0; i< quantidade; i++ ){

        numero = obterNumeroAleatorio(de,ate);
        
        while(numerosSorteados.includes(numero)){
            
            numero = obterNumeroAleatorio(de,ate);
            
        }
        
        numerosSorteados.push(numero);
    }

    numerosSorteados.sort((a, b) => a - b);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    
    alterarStatusBotao();


}

function obterNumeroAleatorio( min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')){

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    }else{

        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}
