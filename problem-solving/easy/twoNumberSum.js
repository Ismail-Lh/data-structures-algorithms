// Time complexity => O(n²) | Space complexity => O(1)
function twoNumberSum(arr, sum) {
  if (arr.length === 0) return null;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return [arr[i], arr[j]];
    }
  }

  return null;
}

// Time complexity => O(n) | Space complexity => O(n)
function twoNumberSum2(arr, sum) {
  const hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    const reminder = sum - arr[i];

    if (hashMap[reminder]) return [arr[i], reminder];
    else {
      hashMap[arr[i]] = true;
    }
  }

  return null;
}

// Time complexity => O(nlog(n)) | Space complexity => O(1)
function twoNumberSum3(arr, sum) {
  const sortedArr = arr.sort((a, b) => a - b);

  console.log(sortedArr);

  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const currentSum = sortedArr[left] + sortedArr[right];
    if (currentSum === sum) return [sortedArr[left], sortedArr[right]];

    if (currentSum < sum) left++;
    else if (currentSum > sum) right--;
  }

  return [];
}

const array = [1, 2, 5, -4, 6, 8];

console.log(twoNumberSum3(array, -4));
