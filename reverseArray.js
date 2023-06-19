function reverseArray (arr) {
    const arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1;
}

function reverseArrayInPlace (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]