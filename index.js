function comprobar() {
    var NombreAceptado = false;
    var Nombre = document.getElementById("nombre");
    var NoNombre = document.getElementById("faltaNombre");
    var ErrorN = document.getElementById("errorNombre");
    var CorrectoN = document.getElementById("correctoNombre");

    var EmailAceptado = false;
    var Email = document.getElementById("email");
    var NoEmail = document.getElementById("faltaEmail");
    var ErrorE = document.getElementById("errorEmail");
    var CorrectoE = document.getElementById("correctoEmail");

    var ClaveAceptada = false;
    var ClaveOK = false;
    var Clave = document.getElementById("clave");
    var NoClave = document.getElementById("faltaClave");
    var ErrorC = document.getElementById("errorClave");
    var CorrectoC = document.getElementById("correctoClave");

    var ConfirmarClaveOK = false;
    var ConfirmarClave = document.getElementById("confirmarClave");
    var NoClave2 = document.getElementById("faltaClave2");
    var ErrorC2 = document.getElementById("errorClave2");
    var CorrectoC2 = document.getElementById("correctoClave2");
    
    
    if (Nombre.value != ""){
        var NombreCorrecto = /^[A-Z\s]+$/i;
        if (NombreCorrecto.test(Nombre.value)){
            NombreAceptado = true;
            Nombre.style.border = "2px solid rgb(61, 224, 56)";
            ErrorN.style.display = "none";
            CorrectoN.style.display = "inline";
        }else{
            NoNombre.textContent="Nombre invalido";
            NoNombre.style.display = "inline";
            Nombre.style.border = "2px solid rgb(238, 70, 70)";
            CorrectoN.style.display = "none";
            ErrorN.style.display = "inline";
        }
    }else{
        NoNombre.style.display = "inline";
        Nombre.style.border = "2px solid rgb(238, 70, 70)";
        CorrectoN.style.display = "none";
        ErrorN.style.display = "inline";
    }
    
    if (Email.value != ""){
        var EmailCorrecto = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(EmailCorrecto.test(Email.value)){
            EmailAceptado = true;
            Email.style.border = "2px solid rgb(61, 224, 56)";
            ErrorE.style.display = "none";
            CorrectoE.style.display = "inline";
        }else{
            NoEmail.textContent="Email invalido";
            NoEmail.style.display = "inline";
            Email.style.border = "2px solid rgb(238, 70, 70)";
            CorrectoE.style.display = "none"
            ErrorE.style.display = "inline";
        }
    }else{
        NoEmail.style.display = "inline";
        Email.style.border = "2px solid rgb(238, 70, 70)";
        CorrectoE.style.display = "none"
        ErrorE.style.display = "inline";
    }

    if (Clave.value != ""){
        ClaveMax = 8;
        ClaveLength = document.getElementById("clave").value.length;
        if (ClaveLength <= ClaveMax){
            ClaveOK = true;
            Clave.style.border = "2px solid rgb(61, 224, 56)";
            NoClave.style.display ="none";
            ErrorC.style.display = "none";
            CorrectoC.style.display = "inline";
        }else{
            NoClave.textContent="No debe tener mas de 8 caracteres";
            NoClave.style.display = "inline";
            Clave.style.border = "2px solid rgb(238, 70, 70)";
            CorrectoC.style.display = "none"
            ErrorC.style.display = "inline";
        }
    }else{
        NoClave.style.display = "inline";
        Clave.style.border = "2px solid rgb(238, 70, 70)";
        CorrectoC.style.display = "none"
        ErrorC.style.display = "inline";
    }

    if (ConfirmarClave.value != ""){
        ConfirmarClaveOK = true;
    }else{
        NoClave2.style.display = "inline";
        ConfirmarClave.style.border = "2px solid rgb(238, 70, 70)";
        CorrectoC2.style.display = "none"
        ErrorC2.style.display = "inline";
    }

    if (ClaveOK && ConfirmarClaveOK == true) {
        if (Clave.value == ConfirmarClave.value){
            ClaveAceptada = true;
            ConfirmarClave.style.border = "2px solid rgb(61, 224, 56)";
            ErrorC2.style.display = "none";
            CorrectoC2.style.display = "inline";
        }else{
            NoClave2.textContent="Las claves no coinciden";
            NoClave2.style.display = "inline";
            ConfirmarClave.style.border = "2px solid rgb(238, 70, 70)";
            CorrectoC2.style.display = "none"
            ErrorC2.style.display = "inline";
        }
    }
        

    if(EmailAceptado && NombreAceptado && ClaveAceptada == true) {
        alert("La inscripcion ha sido correcta");
    }
}

function escribeE() {
    document.getElementById("email").style.border = "2px solid rgb(255, 255, 255)";
    document.getElementById("faltaEmail").style.display ="none"; 
    document.getElementById("errorEmail").style.display = "none";  
}

function escribeN() {
    document.getElementById("nombre").style.border = "2px solid rgb(255, 255, 255)";
    document.getElementById("faltaNombre").style.display ="none"; 
    document.getElementById("errorNombre").style.display = "none";  
}

function escribeC() {
    document.getElementById("clave").style.border = "2px solid rgb(255, 255, 255)";
    document.getElementById("faltaClave").style.display ="none"; 
    document.getElementById("errorClave").style.display = "none";  
}

function escribeC2() {
    document.getElementById("confirmarClave").style.border = "2px solid rgb(255, 255, 255)";
    document.getElementById("faltaClave2").style.display ="none"; 
    document.getElementById("errorClave2").style.display = "none";  
}