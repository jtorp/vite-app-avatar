/**Given a binary nums array, return the maximum number of consecutive 1's ie. [1,1,0,1,1,1] => output 3*/

var findMaxConsecutiveOnesV1 = function (nums) {
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
        } else {
            maxCount = Math.max(count, maxCount)
            count = 0
        }
    }
    return Math.max(count, maxCount)
}

var findMaxConsecutiveOnesV2 = function (nums) {
    let currOnes = 0;
    let maxOnes = 0;

    nums.forEach(num => {
        if (num === 1) {
            currOnes++
            if (currOnes > maxOnes) {
                maxOnes = currOnes
            }
        } else {
            //if the value is not 1, it is reset to 0, so curr streak of consecutive ones end edand a new needs to start
            currOnes = 0
        }
    });
    return maxOnes
}

//console.log('V2conseq:', findMaxConsecutiveOnesV2([1, 0, 1, 1, 1, 1, 0, 1, 1, 1]))

/** Given an array nums of integers, return how many of them contain an even number of digits.
Input: nums = [12,345,2,6,7896]
Output: 2
 */
var findNumbers = function (nums) {
    let evenCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (String(nums[i]).length % 2 === 0) {
            evenCount++
        }
    }
    return evenCount
};

var findEvenDigits = function (nums) {
    return nums.filter(num => String(num).length % 2 === 0).length;

}
console.log('findNumbers', findNumbers([12, 345, 2, 6, 7896]))
console.log('findEvenDigits', findEvenDigits([12, 345, 2, 6, 7896]))


/**Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]. */

var sortedSquares = function (nums) {
    return nums.map((n) => n * n).sort((a, b) => a - b)
};

console.log("sortedSquares", sortedSquares([-4, -1, 0, 3, 10]))

/**Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4] */

var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num === 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j - 1];
            }
            i++ //we don't want to traverse over the duplicate zero
        }

    }
    return arr

};

console.log("in-place duplicate zeros:", duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))


/**You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */

var merge = function (nums1, m, nums2, n) {
    let ans = nums1.slice(0, m).concat(nums2.slice(0, n)).sort((a, b) => a - b)
    return ans
};

console.log("merge2Arrs", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))