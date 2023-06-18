function myFilter(myArray, callback) {
    const filteredArray = [];
    for (let i = 0; i < myArray.length; i++)
        if (callback(myArray[i])) { 
            filteredArray[filteredArray.length] = myArray[i];
        }

    return filteredArray;
}

function isGreaterThanFifty(num, index, arr) {
    return num > 50;
}

function isEven(num, index, arr) {
    return num % 2 == 0;
}

function isOdd(num, index, arr) {
    return num % 2 != 0;
}

let myArray = [100, 55, 4, 12, 52, 5, 49, 88]; 

console.log(myFilter(myArray, isGreaterThanFifty))
console.log(myFilter(myArray, isEven))
console.log(myFilter(myArray, isOdd))