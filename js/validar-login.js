var nombre = document.getElementById("usuario");
var password = document.getElementById("pass");
var error = document.getElementById("error");
error.style.color="red";

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){

        mensajesError.push('ingresa el nombre');

    }else if (password.value === null || password.value === "") {

        mensajesError.push('ingresa la contraseña');
        
    }
    else {
        mensajesError.push('formulario enviado');
    }

    error.innerHTML = mensajesError.join(", ");

    return false;
    
}