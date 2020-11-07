// membuat object person menggunakan function

// function person (nama, umur){
//     this.nama = nama;
//     this.umur = umur;
//     this.detail = function(){
//         return `Halo semua nama saya ${this.nama} saya ${this.umur} tahun.`
//     }
// }

// let person1 = new person ("Naufal", 21);
// let person2 = new person ("Okta", 30)

// console.log(person1);
// console.log(person2);
// console.log(person1.detail());
// console.log(person2.detail());

// -------------------------------------------------------------------------------- 

// membuat object menggunakan class

// class hewan{
//     constructor(nama, kaki){
//         this.nama = nama;
//         this.kaki = kaki;
//     }
//     detail(){
//         return `${this.nama} memiliki ${this.kaki} kaki`
//     };
// };

// let kucing = new hewan("Kucing", 4);
// let ayam = new hewan("Ayam", 2);

// console.log(kucing);
// console.log(ayam);
// console.log(kucing.detail());
// console.log(ayam.detail());

// ================================================================================

// 1. Encapsulation / pembatasan akses langsung ke sebuah property atau method
// kalau property pada functionnya tidak mau di akses maka hilangkan kata this.

// function Gojek (jarak) {
//     this.pricePerKm = 4000; //kalau tidak mau di akses harus di deklarasikan
//     this.jarak = jarak;
//     this.price = function(){
//         return this.pricePerKm * this.jarak
//     }
// }

// let penumpang = new Gojek(2);
// penumpang.pricePerKm = 10000; // mendeklarasikan harga sendiri diluar dari harga yang ada di scope function

// console.log(penumpang.price())

// 2. Inheritance / adalah sebuah kelas yang mewariskan propertynya ke class berikutnya.

// class Person {
//     constructor(nama, umur, gender){
//         this.nama = nama;
//         this.umur = umur;
//         this.gender = gender;
//         this.detail = function(){
//             return `Nama: ${this.nama}, Umur: ${this.umur} Tahun, Gender: ${this.gender}`;
//         }
//     }
// }

// class Peserta extends Person { //pada case ini Person mewariskan, nama, umur dan gender kepada class Peserta
//     constructor(nama, umur, gender, alamat){
//         super(nama, umur, gender);
//         this.alamat = alamat
//     }
// }

// let Client = new Peserta("Naufal", 21, "Laki-laki", "Tj.Priok");
// console.log(Client.nama);
// console.log(Client.umur);
// console.log(Client.gender);
// console.log(Client.alamat);
// console.log(Client.detail())

// 3. Polymorpishm / mewariskan method yang sama namun dapat diubah fungsi dari method itu sendiri

// class Animal{
//     animalSound(){
//         console.log(`Animal has their own sound`)
//     }
// }

// class Cat extends Animal{
//     animalSound(){
//         console.log("MIAAAWWWW BIJJJJ");
//     }
// }

// let Garong = new Cat()
// Garong.animalSound()

// 4. Abstraction / adalah menyembunyikan detail dari sebuah objek atau method dan hanya menampilkan fungsinya saja
// ini hanya istilah aja, karena user pasti gamau tau caranya dan hanya mau input aja tanpa memikirkan cara di baliknya.

// class Hero{
//     constructor(hp) {
//         this.healthPoint = hp;
//     }

//     bertarung() {
//         this.healthPoint -= 50;
//         return `HP anda berkurang menjadi ${this.healthPoint}`;
//     }

//     makan(){
//         this.healthPoint += 100;
//         return `HP anda bertambah menjadi ${this.healthPoint}`;
//     }
// }

// let Bima = new Hero(150);
// console.log(Bima.bertarung()); 
// console.log(Bima.makan()); 