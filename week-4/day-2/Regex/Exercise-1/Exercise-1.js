let myRegex = /[^A-Z]/;
let myName = "Naufal Al-FachrI";
let hasil = myRegex.test(myName);
if(hasil){
    console.log("Huruf ini mengandung huruf besar");
}
else{
    console.log("Huruf ini tidak mengandung huruf besar");
}