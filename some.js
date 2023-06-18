function mySome(callback, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr))
            return true;
    }
    return false;
}

function checkEven(num, index, arr) {
    return num % 2 === 0
}

const nums = [5, 5, 5, 5];
console.log(mySome(checkEven, nums))

console.log(nums.some(checkEven));