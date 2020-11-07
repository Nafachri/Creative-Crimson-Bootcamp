function udahPusing(n) {
    if(n === 1) {
        return 3;
    }
    else{
        return 2 * udahPusing(n - 1)
    }
}
console.log(udahPusing(1));
console.log(udahPusing(2));
console.log(udahPusing(3));
console.log(udahPusing(4));
console.log(udahPusing(5));
