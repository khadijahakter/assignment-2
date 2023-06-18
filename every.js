function myEvery(callback, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr))
            return false;
    }
    return true;
}

function checkEven(num, index, arr) {
    return num % 2 === 0;
}

const nums = [5, 5, 6];
console.log(myEvery(checkEven, nums))