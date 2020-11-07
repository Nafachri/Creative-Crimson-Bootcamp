let myRegex = /^Bagaimana Cara Memulai Usaha Bisnis|Bootcamp Impact Byte|Status Covid Hari Ini$/
let tanyaUser = prompt(`Pilih 1 Topik : ${myRegex}`)
let hasil = myRegex.test(tanyaUser)
console.log(hasil);

if(hasil){
    alert(`Topik yang anda pilih adalah ${tanyaUser}`)
}
else{
    prompt(`Pilih Topik Yang Tersedia : ${myRegex}`)
}

//DOM 

outputUser = document.getElementById("output-user")

let myFunction = () => {
    let tampil = tanyaUser;
    outputUser.innerHTML = tampil;
}
myFunction()

