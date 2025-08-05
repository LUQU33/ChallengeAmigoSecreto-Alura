let amigos = []

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let entrada = input.value;
    
    if (!entrada) {
        alert("Por favor, inserte un nombre.")
    } else {
        console.log(entrada);
        amigos.push(entrada);
        input.value = "";
    }

}