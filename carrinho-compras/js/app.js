function adicionar(){
//recuperar valores
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorProduto = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;


//calcular preco
let preco = quantidade * valorProduto;
console.log(preco);
//adicionar ao carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML += `<section class="carrinho__produtos__produto">
                        <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${valorProduto}</span>
                      </section>`

let listaCompras = [];

listaCompras.push(nomeProduto,valorProduto,quantidade);




//exibir valor total


}

function limpar(){

}