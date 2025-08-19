// inches to feet 

function inchesToFeet(height){

    const feet = height/12;
    const feetNumber= parseInt(feet);
    const inchRemaining= height %12;
    const result= feetNumber+' fit '+ inchRemaining + ' inch ';
    return result;
}
const result= inchesToFeet(75);
console.log(result);