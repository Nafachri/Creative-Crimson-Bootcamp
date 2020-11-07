// output yang di ingin dihasilkan 0,2,4

function angkaGenap (n) {
    if(n === 0){
        console.log(n);
    }
    else{
        if(n % 2 === 0){
            console.log(n) 
        }
        angkaGenap(n-1)
    }
    
}
angkaGenap(5)