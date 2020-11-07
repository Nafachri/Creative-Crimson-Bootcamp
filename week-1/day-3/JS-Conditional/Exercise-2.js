let tanyaUser1 = Number(prompt("Pilih angka pertama anda"));
let tanyaUser2 = Number(prompt("Pilih angka kedua anda"));

if(tanyaUser1 > tanyaUser2){
    alert(`${tanyaUser1} greater than ${tanyaUser2}`);
    console.log(`${tanyaUser1} greater than ${tanyaUser2}`)
}else if(tanyaUser2 > tanyaUser1){
    alert(`${tanyaUser2} greater than ${tanyaUser1}`);
    console.log(`${tanyaUser2} greater than ${tanyaUser1}`)
}else if(tanyaUser1 === tanyaUser2){
    alert(`${tanyaUser1} is equal ${tanyaUser2}`);
    console.log(`${tanyaUser1} is equal ${tanyaUser2}`)
}