// function number(n){
//     if(n == 1){
//         return 1
//         console.log(number)
//     }
//     else{
//         return n + number(n-1)
//     }
// }

// console.log(number(4));

function faktorial(n){
    if(n === 1){
        return 1
    }
    else{
        return n * faktorial(n-1)
    }
}

console.log(faktorial(4))

