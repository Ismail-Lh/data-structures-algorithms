// Time complexity => O(nlog(n)) | Space complexity => O(n)
function sortedSquaredArray(array) {
  const newArr = [...array];
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] *= newArr[i];
  }

  return newArr.sort((a, b) => a - b);
}

// Time complexity => O(n) | Space complexity => O(n)
// The given array must be sorted
function sortedSquaredArray2(array) {
  let left = 0;
  let right = array.length - 1;

  const newArray = [...new Array(array.length)].map(() => 0);
  let endIdx = newArray.length - 1;

  while (left <= right) {
    let value;
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      value = array[left];
      left++;
    } else {
      value = array[right];
      right--;
    }

    newArray[endIdx] = value * value;
    endIdx--;
  }

  return newArray;
}

const array = [-10, -2, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sortedSquaredArray2(array));

console.log(array);
