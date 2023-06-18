function myMap(callback, arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = callback(arr[i]);
    }
    return arr1;
}

function incrementByFour (x, i, arr) {
    return x + 4;
}

function decrementByFour (x, i, arr) {
    return x - 4;
}

let nums = [1, 2, 3, 4, 5, 6]; 
console.log(myMap(incrementByFour, nums))
console.log(myMap(decrementByFour, nums))