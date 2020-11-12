let mobil = {
    nama: "Mitsubishi",
    tujuan: "Bali",
    jarak: "70KM",
    tourKeluarga: function() {
        return `Hai semua saya baru saja membeli mobil ${this.nama} dan ingin mencobanya ke ${this.tujuan} yang diperkirakan berjarak ${this.jarak}, doakan saya selamat sampai tujuan ya!`
    }
}

let siswa = [
    {
        nama: "Naufal Al-Fachri",
        kelas: "Kamboja",
        asalNegara: "Indonesia"
    }

    {
        nama: "Diva Raissa Meidyana",
        kelas: "Melati",
        asalNegara: "Australia"
    }
    {
        nama: "Oktado",
        kelas: "Mawar",
        asalNegara: "Myanmar"
    }
]

// buatlah data array siswa tersebut kedalam object
// akses nama dari object yang dibuat tadi

let obj = {}

let getData = () => {
    for(let i = 0; i < siswa.length; i++){  // Perulangan pertama masih dalam bentuk array
        console.log(siswa[i]);
    for(let j = 0; j < siswa[i].length; j++) // Kita lakukan looping sekali lagi agar data yang array menjadi object
        obj.siswa[j] = {}
    }
}
getData()