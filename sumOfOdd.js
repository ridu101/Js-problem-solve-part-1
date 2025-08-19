function oddAverage(numbers) {
    let odd = [];   // declare outside the loop

    for (const number of numbers) {
        if (number % 2 === 1) {
            odd.push(number);
        }
    }
    console.log('The odds numbers are: ',odd)

    let sum = 0;
    for (const number of odd) {
        sum = sum + number;
    }

    const count = odd.length;
    console.log('The Total odd number are:', count);
    let avg = sum / count;

    return avg;
}

const numbers = [20, 22, 25, 21, 26, 28,29,35,41,48,47];
const avg = oddAverage(numbers);
console.log('The average of the array is:', avg);
