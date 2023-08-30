// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// EX.
// Given nums = [3, 2, 4], target = 6
// Because num[1] + num2[2] = 2 + 4 = 6
// return [1 , 2]

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) { // for loop iterating through the array of numbers
        const diff = target - nums[i]; // calculates the difference between the target and current number in the array
        const diffI = nums.indexOf(diff); // searches index of diff in the nums array
        if (diffI !== -1 && diffI !== i) { // ensures that it's not equal to -1 and same number is not being used twice
            // If both conditions are met, it means two distinct numbers in the array sum up to target
            return [i, diffI]; // returns an array containing the indices of the two numbers
        }
    }
}

console.log(twoSum([3,2,4], 6))