let formulario = document.getElementById("login-form");

formulario.addEventListener("submit", function(evento) {
    let nombre = document.getElementById("nombre").value;
    let clave = document.getElementById("clave").value;

    if (nombre === "" || clave === "") {
        alert("Por favor, completá todos los campos para continuar.");
        evento.preventDefault();

        document.getElementById("nombre").style.border = nombre === "" ? "2px solid red" : "";
        document.getElementById("clave").style.border = clave === "" ? "2px solid red" : "";
    } else {
        alert("Bienvenido, " + nombre);
    }
});

document.getElementById("toggle-clave").addEventListener("click", function () {
    let claveInput = document.getElementById("clave");
    claveInput.type = claveInput.type === "password" ? "text" : "password";
});

