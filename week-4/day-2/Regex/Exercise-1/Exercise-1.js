let buttonClick = document.getElementById("button-click");
let inputNamaUser = document.getElementById("input-nama-user");
let outputNameUser = document.getElementById("output-nama-user");


let myFunction = () => {
    let myRegex = /^[A-Z]/
    let username = inputNamaUser.value;
    let test = myRegex.test(username);

    if(test){
        outputNameUser.innerHTML = `Selamat Datang ${username} !`
        console.log("Huruf Depan Nama Mengandung Huruf Besar");
    }else{
        outputNameUser.innerHTML = `Selamat Datang ${username} !`
        console.log("Huruf Depan Nama Tidak Mengandung Huruf Depan");
        
    }
    return false;
}
buttonClick.onclick = myFunction;
