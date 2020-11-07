let myRegex = /^[A-Z]/;
let myName = prompt("Masukan nama anda")
let hasil = myRegex.test(myName);
if(hasil){
    console.log("Nama depan anda mengandung huruf besar");
    alert("Nama depan anda mengandung huruf besar");
}
else{
    console.log("Nama depan anda tidak mengandung huruf besar");
    alert("Nama depan anda tidak mengandung huruf besar");
}

// DOM 
// akses id paragraf di html, setiap kali user input nama maka tampilkan di sini

let namaUser = document.getElementById("nama-user")

let myFunction = () => {
    let tampil = myName;
    namaUser.innerText = `Selamat Datang ${tampil} !`;
};
myFunction()