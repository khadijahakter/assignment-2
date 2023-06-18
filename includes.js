function myInclude (targetValue, fromIndex) {
    for (let i = 0; i < fromIndex.length; i ++) {
        if (targetValue === fromIndex[i])
            return true;
        return false;
    }
}

function checkAvailability(targetValue, fromIndex) {
    return targetValue;
}

const fruits = ["pineapple", "raspberry", "strawberry"];
const colors = ["black", "blue", "green", "purple"]

console.log(myInclude(checkAvailability("pineapple"), fruits))
console.log(myInclude(checkAvailability("orange"), fruits))
console.log(myInclude(checkAvailability("green"), fruits))