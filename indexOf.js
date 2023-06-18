function myIndexOf(searchElement, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement)
            return i;
    }
    return -1;
}

const colors = ["blue", "green", "purple", "orange"]
const nums = [1, 5, 2, 8, 9]

console.log(myIndexOf("purple", colors));
console.log(myIndexOf("darkgrey", colors));
console.log(myIndexOf(7, nums));
console.log(myIndexOf(5, nums));
