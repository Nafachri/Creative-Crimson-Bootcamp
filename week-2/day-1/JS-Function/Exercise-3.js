let tanyaUmur = prompt("Umur berapa kucing anda?")

umurKucing = (number) => {
    if (number === 1){
        return 15;
    }else{
        return (4 * number) + (4**2);
    }
}

alert(`Umur kucing anda adalah ${umurKucing(tanyaUmur)}`)