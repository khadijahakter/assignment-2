function myEach(callback, arr) {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = callback(arr[i], i);
    }
    return arr1;
}

function doubled(num, index, arr) {
    return num * 2;
}

function tripled(num, index, arr) {
    return num * 3;
}

let nums = [1, 2, 3, 4, 5, 6]; 
console.log(myEach(doubled, nums))
console.log(myEach(tripled, nums))