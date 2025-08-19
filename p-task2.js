// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countNumber(array, findNumber){

    let count=0;

    for (const number of array){
        if( number=== findNumber){
            count = count+1;

        }
    }
    return count;
}
const number1= [5,6,11,12,98,5];
console.log(countNumber(number1, 5));