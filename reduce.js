function myReduce(callback, arr, curInd, curVal) {
    let initial = 0;
    for (let i = 0; i < arr.length; i++) {
        initial = callback(initial, arr[i]);
    }
    return initial;
}

function sumWithInitial(accumulator, curVal) {
    return accumulator += curVal;
}

const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];

console.log(myReduce(sumWithInitial, arr))
console.log(myReduce(sumWithInitial, arr1))