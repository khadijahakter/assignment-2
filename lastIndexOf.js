function myLastIndexOf(searchElement, arr) {
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] === searchElement)
            return i;
    }
    return -1;
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(myLastIndexOf("Tiger", animals));
console.log(myLastIndexOf("Dodo", animals));
console.log(myLastIndexOf("Giraffe", animals));