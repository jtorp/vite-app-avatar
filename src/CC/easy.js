/** Given an array of integers nums and an integer target, return indices of the two numbers such 
 * that they add up to target.
 * Input: nums = [2,7,11,15], target = 9
Output: [0,1] */


var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const otherNumber = target - nums[i]
        const indexOfotherNumber = nums.indexOf(otherNumber)
        if (indexOfotherNumber != -1 && indexOfotherNumber != i) {
            return [i, indexOfotherNumber]
        }
    }
};


//console.log(twoSum([3, 2, 4], 6))//9 expected output [0,1]

var removeDuplicates = function (nums) {
    const k = nums.filter((num, index) => nums.indexOf(num) === index)
    return k
};

//console.log(removeDuplicates([1, 1, 2]))

/**Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */

var removeElement = function (nums, val) {
    nums = nums.filter(function (num) {
        return num !== val;
    });
    return nums.length;
};

//console.log("Remove El", removeElement([[3, 2, 2, 3]]))

var runningSum = function (nums) {
    const res = [];
    res[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] + nums[i]

    }
    return res

};

//console.log("Running sum", runningSum([1, 2, 3, 4]))

/**Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1. */

var pivotIndex = function (nums) {
    //const total = nums.reduce((acc, n) => acc + n, 0);
    // let left_sum = 0;
    // let right_sum = 0

    // for (let i = 0; i < nums.length; i++) {
    //     right_sum = total - left_sum - nums[i]
    //     if (left_sum === right_sum) {
    //         return i
    //     }
    //     left_sum += nums[i]
    //     console.log(left_sum)

    // }
    // return -1

    let sum = 0;
    let left_sum = 0;
    sum = nums.reduce((acc, n) => acc + n, 0)

    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i];
        if (left_sum === sum) {
            return i
        }
        left_sum += nums[i]
    }
    return -1
};
//console.log("pivot index: ", pivotIndex([1, 7, 3, 6, 5, 6]))

/** Fill array with square nums */
const squareNums = []
squareNums.length = 10
for (let i = 0; i < squareNums.length; i++) {
    let item = (i + 1) * (i + 1)
    squareNums[i] = item
}

console.log(squareNums)

