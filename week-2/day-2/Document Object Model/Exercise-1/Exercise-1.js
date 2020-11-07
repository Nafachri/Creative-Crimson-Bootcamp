// akses fitur-fitur yang di HTML yang akan kita gunakan dengan DOM
let tweet = document.getElementById("tweet");
let hasilTweet = document.getElementById("hasilTweet");
let btnTweet = document.getElementById("btnTweet");

// kita mau masukin inputan kedalam data
let myTweet = () => {
    let inputTweet = tweet.value;
    let tampil = `${inputTweet}`

    // tampilkan di htmlnya 
    hasilTweet.innerHTML = tampil
    btnTweet.onclick = myTweet;
}