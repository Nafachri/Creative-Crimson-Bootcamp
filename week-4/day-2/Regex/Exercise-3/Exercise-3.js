let inputTopicUser = document.getElementById("input-topic-user");
let buttonClick = document.getElementById("button-click");
let outputTopicUser = document.getElementById("output-topic-user");

let myFunction = () => {
    let myRegex = /^Bagaimana Cara Memulai Usaha Bisnis|Bootcamp Impact Byte|Status Covid Hari Ini$/
    let userTopic = inputTopicUser.value;
    let test = myRegex.test(userTopic);

    if(test){
        outputTopicUser.innerHTML = `Topic Yang Anda Pilih Adalah : ${userTopic}`
        console.log(userTopic);
    }else{
        console.log("User Tidak Memilih Topik Yang Ada");
    }
    return false;
}
buttonClick.onclick = myFunction();



// let myRegex = /^Bagaimana Cara Memulai Usaha Bisnis|Bootcamp Impact Byte|Status Covid Hari Ini$/
// let tanyaUser = prompt(`Pilih 1 Topik : ${myRegex}`)
// let hasil = myRegex.test(tanyaUser)
// console.log(hasil);

// if(hasil){
//     alert(`Topik yang anda pilih adalah ${tanyaUser}`)
// }
// else{
//     prompt(`Pilih Topik Yang Tersedia : ${myRegex}`)
// }

// //DOM 

// outputUser = document.getElementById("output-user")

// let myFunction = () => {
//     let tampil = tanyaUser;
//     outputUser.innerHTML = tampil;
// }
// myFunction()