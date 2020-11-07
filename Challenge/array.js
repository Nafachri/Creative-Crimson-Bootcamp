// input : [123, 456]

// PROSES:
// 1. 456 dibalik jadi 654
// 2. 123 dibalik jadi 321
// 3. 654 akan berada di index 0 array dan 321 akan berada di index 1 array

// output: [654, 321]

// catatan: output merupakan array of numbers, bukan array of string

// function reverseAll(arr) {
//     //Implementasi kode disini!
//   }
  
//   console.log(reverseAll([123, 521, 456])) //[654,125,321]
//   console.log(reverseAll([897])) //[798]
//   console.log(reverseAll([])) //[]

let input = [123,456]
let hasil1 = input[0]
let hasil2 = input[1]
let final = `${hasil2} ${hasil1}`
console.log(input);
console.log(hasil1);
console.log(hasil2);
console.log(final);