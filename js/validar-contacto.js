var nombre = document.getElementById("nombre");
var password = document.getElementById("dire");
var error = document.getElementById("error");
error.style.color="blue";

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){

        mensajesError.push('ingresa el nombre');

    }else if (password.value === null || password.value === "") {

        mensajesError.push('ingresa la direccion');
        
    }
    else {
        mensajesError.push('formulario enviado');
    }

    error.innerHTML = mensajesError.join(", ");

    return false;
    
}