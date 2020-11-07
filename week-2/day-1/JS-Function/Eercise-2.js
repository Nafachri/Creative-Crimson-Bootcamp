// Mengubah Fahrenheit ke Celcius

function rumusFahrenheitKeCelcius (number){
    return number * (5/9);
}

function getcelcius(fahrenheit){
    return rumusFahrenheitKeCelcius(fahrenheit) + 32;
}
getcelcius(10);