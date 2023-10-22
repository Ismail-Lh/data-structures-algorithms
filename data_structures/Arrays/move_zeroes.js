// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const swap = (arr, indx1, indx2) =>
  ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);

function moveZeroes(nums) {
  let numsLength = nums.length;

  if (!numsLength) return;

  if (numsLength === 1 && nums[0] === 0) return nums;

  let zero = 0;
  let notZero = 0;

  while (notZero < numsLength) {
    if (nums[notZero] !== 0) {
      swap(nums, notZero, zero);
      notZero++;
      zero++;
    } else {
      notZero++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
