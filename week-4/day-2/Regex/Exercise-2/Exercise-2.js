let myRegex = /^\d{10,12}$/g;
let myNumber = Number(prompt("Input Your Phone Number, Min 10 Max 12"))
let hasil = myRegex.test(myNumber);

if(hasil){
    console.log("You're number is right")
    alert("You're number is right")
}else{
    console.log("Please input min 10 number & max 12 number");
    alert("Please input min 10 number & max 12 number");
}

// DOM 

let userNumber = document.getElementById("user-number")

let myFunction = () => {
    let tampil = myNumber;
    userNumber.innerHTML = `Your Phone Number was : ${tampil}`
}
myFunction()

