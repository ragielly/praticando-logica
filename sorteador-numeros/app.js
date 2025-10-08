function sortearNumero(){
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);



    let numerosSorteados = [];
    let numero;

    for(let i = 0; i< quantidade; i++ ){

        numero = obterNumeroAleatorio(de,ate);
        numerosSorteados.push(numero);

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    console.log(numerosSorteados);


}
function obterNumeroAleatorio( min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}