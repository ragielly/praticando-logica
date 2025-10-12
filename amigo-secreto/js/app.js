let listaAmigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(amigo.value.trim() === ''){
        alert('Informe o nome de um amigo.')
        return
    }

    if(listaAmigos.includes(amigo.value)){
        alert('Amigo ja adicionado.');
        return
    }

    listaAmigos.push(amigo.value);

    console.log(amigo.value);
    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ',' + amigo.value;
    }

    amigo.value = '';
}

function sortear(){
    embaralha(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');

    if(listaAmigos.length < 4){
        alert('Adicione no minimo 4 amigos.')
        return
    }

    for (let i = 0; i < listaAmigos.length; i++) {
        if(i == listaAmigos.length -1 ){
            sorteio.innerHTML += listaAmigos[i]+'-->'+listaAmigos[0]+'</br>';
        }else{
            sorteio.innerHTML += listaAmigos[i]+'-->'+listaAmigos[i+1]+'</br>';
        }
        
    }
}

function reiniciar(){
    listaAmigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}