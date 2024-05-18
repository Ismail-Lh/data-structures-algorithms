// Time complexity => O(n) | Space complexity => O(n)
// Solution using a "while loop"
function validateSubsequence(arr, subArr) {
  let arrPointer = 0;
  let subArrPointer = 0;

  const arrLength = arr.length;
  const subArrLength = subArr.length;

  while (arrPointer < arrLength && subArrPointer < subArrLength) {
    if (arr[arrPointer] === subArr[subArrPointer]) {
      arrPointer++;
      subArrPointer++;
    } else {
      arrPointer++;
    }
  }

  return subArrPointer === subArrLength;
}

// Time complexity => O(n) | Space complexity => O(n)
// solution using a "for loop"
function validateSubsequence2(arr, subArr) {
  let subArrPointer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (subArrPointer === subArr.length) return true;

    if (arr[i] === subArr[subArrPointer]) subArrPointer++;
  }

  return false;
}

const arr = [5, 4, -4, 1, -7, 10, 2, 3];
const subArr = [-4, -7, 2, 10];

console.log(validateSubsequence2(arr, subArr));
