
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    switch (tipoIngresso) {
        case 'pista':
            comprarPista(quantidade);
            break;
        case 'inferior':
            comprarInferior(quantidade);
            break;
        case 'superior':
            comprarSuperior(quantidade);
            break;
    
        default:
             alert('Opção Invalida');
            break;
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade indisponivel');
    }else{
        qtdPista = qtdPista - qtd;

        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');

    }


}
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade indisponivel');
    }else{
        qtdInferior = qtdInferior - qtd;

        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');

    }

}
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade indisponivel');
    }else{
        qtdSuperior = qtdSuperior - qtd;

        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');

    }
}