function showRegisterForm() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

function showLoginForm() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("register-container").style.display = "none";
}

function login() {
    // Implementar lógica de inicio de sesión aquí
    if(username.value === null || username.value === ""){

        alert('ingresa el usuario');

    }else if (password.value === null || password.value === "") {

        alert('ingresa la contraseña');
        
    }
    else {
        alert("¡Inicio de sesión exitoso!");
    }
    
}

function register() {
    // Implementar lógica de registro de usuario aquí
    if(new_username.value === null || new_username.value === ""){

        alert('ingresa el usuario');

    }else if (new_password.value === null || new_password.value === "") {

        alert('ingresa la contraseña');
        
    }else if (tel.value === null || tel.value === "") {

    alert('ingresa tu número');
    
    }else if (email.value === null || email.value === "") {

    alert('ingresa tu correo');
    
    }
    else {
        alert("¡Registro exitoso!");
    }
    
}
