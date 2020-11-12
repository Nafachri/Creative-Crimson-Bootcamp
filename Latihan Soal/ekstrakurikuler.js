/* 
  Pada sebuah sekolah, terdapat banyak club ekstrakurikuler. Setiap siswa wajib untuk mengikuti minimal 1 club ekstrakulikuler tersebut.
  Sekolah ini membutuhkan sebuah aplikasi yang dapat mengelompokan data berdasarkan nama club yang di ikuti oleh siswa beserta kelasnya.

  [instruction]
  1. Buatlah sebuah fungsi untuk memproses data sehingga bisa mengeluarkan output seperti dengan sample. Untuk fungsi pertama ini hanya
   boleh menggunakan looping for, dilarang menggunakan build in function javascript (.filter(), .map(), .reduce(), .includes(), .indexOf() . forEach, dan lain-lain)

  2. Buatlah sebuah fungsi yang melakukan logika yang sama dengan fungsi di atas, namun mengggunakan salah satu atau kombinasi build in
   function javascript (.filter(), .map(), .reduce(), .includes(), .indexOf(), dan lain-lain)
*/


let data = 
[
  {
    name: 'Adi',
    class: 'Mawar',
    club: ['Bola', 'Bulutangkis']
  },
  {
    name: 'Cinthya',
    class: 'Melati',
    club: ['Membaca', 'Bulutangkis']
  },
  {
    name: 'Andika',
    class: 'Mawar',
    club: ['Bulutangkis', 'Membaca']
  },
  {
    name: 'Daniel',
    class: 'Mawar',
    club: ['Bola', 'Renang']
  }
]


function ekstrakurikuler(data){
  
}
​
console.log(ekstrakurikuler(data));

/* example output:
{
  Bola: {
    Mawar: ['Adi', 'Daniel']
  },
  Bulutangkis: {
    Mawar: ['Adi', 'Andika'],
    Melati: ['Cinthya']
  },
  Membaca: {
    Melati: ['Cinthya'],
    Mawar: ['Andika']
  },
  Renang: {
    Mawar: ['Daniel']
  }
} */