// akses data inputan username dan password
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnRegist = document.getElementById("btnClick");

// isi akses tersebut dengan inputan user
let myFunction = () => {
    let inputUsername = username.value;
    let inputPassword = password.value;

    hasilRegister1.innerText = `nama : ${inputUsername}`;
    hasilRegister2.innerText = `password : ${inputPassword}`;

    return false;
}

btnRegist.onclick = myFunction;