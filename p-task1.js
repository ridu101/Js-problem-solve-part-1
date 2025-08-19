// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit (temperature){
    let temp= (temperature * 9/5)+32;
    return temp;

}

const temp= 38;
const convertedResult= celsiusToFahrenheit(temp);
console.log(convertedResult);