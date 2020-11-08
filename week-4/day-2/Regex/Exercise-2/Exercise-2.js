let inputNumberUser = document.getElementById("input-number-user")
let buttonClick = document.getElementById("button-click")
let outputUserNumber = document.getElementById("output-user-number")

let myFunction = () => {
    let myRegex = /^\d{10,12}$/g;
    let userNumber = inputNumberUser.value;
    let test = myRegex.test(userNumber);

    if(test){
        outputUserNumber.innerHTML = `Nomor Anda Adalah : ${userNumber}`
        console.log("Nomor Inputan Benar");
    }else{
        outputUserNumber.innerHTML = `Nomor Anda Tidak Memenuhi Syarat ! Minimal 10 Digit Maksimal 12 Digit`
        console.log("Nomor Inputan Salah");
    }
    return false;
}
buttonClick.onclick = myFunction;
