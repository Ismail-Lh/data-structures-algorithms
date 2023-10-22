// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// !: BIG-O --> O(n²)
function maxSubArray_1(nums) {
  if (!nums.length) return null;

  if (nums.length === 1) return nums[0];

  let maxSum = Number.MIN_VALUE;
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      curSum += nums[j];
      console.log(`------------- CURRENT SUM ${curSum} ---------------`);
      maxSum = Math.max(maxSum, curSum);
    }
    console.log("----------------------------");
    console.log(`maxSum so far ${maxSum}`);
    console.log("----------------------------");
    curSum = 0;
  }

  return maxSum;
}

console.log(maxSubArray_1([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // output = 6
console.log(maxSubArray_1([1])); // output = 1
console.log(maxSubArray_1([5, 4, -1, 7, 8])); // output = 23
console.log(maxSubArray_1([])); // output = null
