/* 
  Buatlah sebuah fungsi yang akan mengelompokkan angka berdasarkan kategori dan prioritas sebagai berikut :
  1. Angka Kelipatan 3
  2. Angka Genap
  3. Angka Ganjil

  setelah di kelompokkan, masukan dalam sebuah array dengan urutan : kelompok angka genap, kelompok angka ganjil dan kelompok angka kelipatan 3

*/

function mengelompokkanAngka(arr) {
  // you can only write your code here!
  for(let i = 1; i <= 10; i++){
    if(i % 3 === 0){
      console.log(`${i} adalah bilangan kelipatan 3`);
    }else if(i % 2 === 0){
      console.log(`${i} adalah bilangan genap`);
    }else if
  }
}

console.log(mengelompokkanAngka[2, 4, 6]);

// TEST CASES
// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]
