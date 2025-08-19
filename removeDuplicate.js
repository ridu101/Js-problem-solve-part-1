// remove duplicate values of an array

function removeDuplicate(array){
    const uniqueArray=[];
    for (const item of array){
       if (uniqueArray.includes(item)===false){
        uniqueArray.push(item);
       }
    }
    return uniqueArray;

}

const value= ['abul', 'babul', 'cabul', 'kabul', 'abul', 'babul'];
const result= removeDuplicate(value);
console.log(result);