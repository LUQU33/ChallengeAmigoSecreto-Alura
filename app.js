let amigos = []

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let entrada = input.value;
    
    if (!entrada) {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(entrada);
        input.value = "";

        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos")

    lista.innerHTML = "";

    for (let amigo of amigos){
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>${amigoSorteado}</li>`
}