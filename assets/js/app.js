let stringaValida = /^[a-zA-Z]/;
let emailValida = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
let risultato = document.getElementById("risultato");

function validaNome() {
    let nome = document.modulo.nome.value;

    if (stringaValida.test(nome)) {
        return true;
    } else {
        return false;
    }
}

function validaCognome() {
    let cognome = document.modulo.cognome.value;

    if (stringaValida.test(cognome)) {
        return true;
    } else {
        return false;
    }
}

function validaEta() {
    let eta = document.modulo.eta.value;

    if (eta >= 16) {
        return true;
    } else {
        return false;
    }
}

function validaEmail() {
    let email = document.modulo.email.value;

    if (emailValida.test(email)) {
        return true;
    } else {
        return false;
    }

}

function validaPassword() {
    let password = document.modulo.password.value;

    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function validazione(event) {
    event.preventDefault();

    if (validaNome() && validaCognome() && validaEta() && validaEmail() && validaPassword()) {
        risultato.innerHTML = "Valido";
        document.modulo.reset();
    } else {
        risultato.innerHTML = "Non valido";
    }
}