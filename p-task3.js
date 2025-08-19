// Write a function to count the number of vowels in a string.

function findVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const character of string) {
        if (vowels.includes(character)) {
            count = count + 1;
        }
    }

    return count;
}


const string = 'Hello World';
const string2 = 'Hiya I Love You';
const result= findVowels(string2);
console.log(result);
