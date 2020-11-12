/**
 *  =======================
 *  RAZIA GANJIL GENAP
 *  =======================
 *
 * [Description]
 * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran 
 * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
 * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat 
 * yang tidak sama dengan aturan ganjil genap
 * 
 * [Instructions]
 * 1. Function menerima parameter berupa tanggal, data kendaraan
 * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
 * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
 * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
 * 5. Berlaku hanya untuk MOBIL.
 * 6. Lokasi Ganjil Genap
 *   - Gajah Mada
 *   - Hayam Wuruk
 *   - Sisingamangaraja
 *   - Panglima Polim
 *   - Fatmawati
 *   - Tomang Raya
 *
 * [Rules]
 * 1. tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
 */




function kenaRazia(nama ,date, data, kendaraan) { //Menambahkan Parameter Nama dan Kendaraan Untuk Seleksi Motor/Mobil
  var lokasiRazia = [
    'Gajah Mada',
    'Hayam Wuruk',
    'Sisingamangaraja',
    'Panglima Polim',
    'Fatmawati',
    'Tomang Raya',
  ]
  if(date % 2 === 0 && kendaraan === "Mobil"){
    console.log(`${nama}, Mau Damai Atau Tilang ?`);
  }else {
    console.log(`${nama}, Silahkan Melanjutkan Perjalanan`);
  }
}

kenaRazia("Doni", 1 , "Panglima Polim", "Mobil");
kenaRazia("Toni", 2 , "Panglima Polim", "Mobil");
kenaRazia("Dina", 2 , "Panglima Polim", "Motor");
kenaRazia("Anna", 8 , "Panglima Polim", "Mobil");

// console.log(kenaRazia(27, [{
//   name: 'Doni',
//   plat: 'B 2791 KDS',
//   type: 'Mobil',
//   rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
// },
// {
//   name: 'Toni',
//   plat: 'B 1212 JBB',
//   type: 'Mobil',
//   rute: ['Pintu Besar Selatan', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang']
// },
// {
//   name: 'Dina',
//   plat: 'B 444 XSX',
//   type: 'Motor',
//   rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
// },
// {
//   name: 'Anna',
//   plat: 'B 678 DD',
//   type: 'Mobil',
//   rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
// },
// ]))

// [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
