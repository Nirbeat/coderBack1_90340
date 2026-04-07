// INSTANCIAMOS EL SOCKET
const clientSocket = io();
// CAPTURAMOS EL ID AL CONECTARSE
// console.log(clientSocket.id)

// CAPTURAMOS EL EVENTO DEL SUBMIT Y DENTRO EMITIMOS UN EVENTO PARA EL
// SOCKET DEL SERVIDOR
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.querySelector("input").value;
    clientSocket.emit("message", message);
    document.querySelector("input").value = "";
})

// CREAMOS LA ESCUCHA DEL EVENTO DEL MENSAJE DEL SERVIDOR PARA CAPTURAR
// LOS MENSAJES DE LOS DEMÁS USUARIOS Y RENDERIZARLOS EN TIEMPO REAL
// VAMOS A RECIBIR EL ID DEL USUARIO QUE ENVIA EL MENSAJE Y ASI SABREMOS
// COMO RENDERIZAR LOS MENSAJES CORRECTAMENTE
clientSocket.on("new-message", ({ message, id }) => {
    const chatBox = document.querySelector("#chat-box");
    const messageElement = document.createElement("p");
    if (id == clientSocket.id) {
        messageElement.innerHTML += `<div class="message self">
            <strong>Tú:</strong> ${message}
        </div>`
    } else {
        messageElement.innerHTML += `<div class="message other">
            <strong>${id}:</strong> ${message}
        </div>`;
    }
    chatBox.appendChild(messageElement);
})
// ESCUCHAMOS CUANDO UN NUEVO USUARIO SE CONECTA
clientSocket.on("new-user-connected", (id) => {
    Swal.fire({
        text: `Nuevo participante: ${id}`,
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'info'
    });
});
