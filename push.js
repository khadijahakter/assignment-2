function myPush(num) {
    nums[nums.length] = num;
    return nums.length;
}

const nums = [2, 4];

console.log(myPush(8));

