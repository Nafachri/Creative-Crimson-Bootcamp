let tanyaUser = confirm("apakah anda ingin mengulang?")
let count = 0
while(tanyaUser == true){
    tanyaUser+=1
    tanyaUser = confirm("apakah anda ingin mengulang?")
    count++
}
if (tanyaUser === false){
    alert(`Kamu sudah mengulang sebanyak ${count} kali`)
}
