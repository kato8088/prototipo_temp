let savedUsername = localStorage.getItem('savedUsername');
let savedPassword = localStorage.getItem('savedPassword');

function checkLogin() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (username == savedUsername && password == savedPassword) {
        alert('deu bao')
    }
    // else {
    //     alert('deu merda :(')
    // }

    console.log(username.value)
    console.log(password.value) 
    // console.log('username: ${username}; password: ${password}')
}

function submitRegister() {
    registeredUsername = document.getElementById('username').value;
    registeredPassword = document.getElementById('password').value;

    localStorage.setItem('savedUsername', registeredUsername);
    localStorage.setItem('savedPassword', registeredPassword);

    // temporario:
    alert('registrado! ver console para mais informações')
}

function clearVars() {
    alert('2do!')
}

function logVars_debug() {
    console.log('savedUsername; savedPassword:')
    console.log(savedUsername)
    console.log(savedPassword)
}