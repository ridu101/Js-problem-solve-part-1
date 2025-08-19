// // if the year is devisable with 4 then the year is leap year

// function yearLeapOrNot(year) {

//     if (year % 4 === 0) {
//         console.log(' Yes this is a leap year');
//     }
//     else {
//         console.log('This is not a leap year');
//     }
// }

// yearLeapOrNot(2022);


// advance formula

function leapOrNonLeap( year ){


    if (year % 100 !==0 && year %4 ===0){
        console.log("This is a Leap Year");
    }
    else{
        console.log('This is not a leap year');
    }
}

leapOrNonLeap(2300);