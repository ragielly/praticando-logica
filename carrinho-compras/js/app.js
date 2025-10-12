
let totalCompra = 0;
limpar();


function adicionar(){
//recuperar valores
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorProduto = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

if (quantidade === '' || quantidade <= 0) {
  alert('Por favor, informe uma quantidade válida.');
  return;
}


//calcular preco
let preco = quantidade * valorProduto;
//adicionar ao carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML += `<section class="carrinho__produtos__produto">
                        <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${preco}</span>
                      </section>`

//exibir valor total
totalCompra = totalCompra + preco;
let valorTotal = document.getElementById('valor-total');
valorTotal.textContent = `R$ ${totalCompra}`;
//limpar quantidade
document.getElementById('quantidade').value = 0;
}

function limpar(){
totalCompra = 0;
document.getElementById('lista-produtos').innerHTML = ' ';
document.getElementById('valor-total').innerHTML = 'R$ 0';
}