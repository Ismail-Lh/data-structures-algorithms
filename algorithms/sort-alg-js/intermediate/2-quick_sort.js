function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
// !: Brute Force pivot functionality
// function pivot(arr, start = 0, end = arr.length) {
//   let swapIdx = start;
//   let pivot = arr[start];

//   for (let i = start + 1; i < end; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//     } else if (pivot < arr[i]) {
//       for (let j = i + 1; j < end; j++) {
//         if (arr[j] < pivot) {
//           swap(arr, i, j);
//           swapIdx++;
//           break;
//         }
//       }
//     }
//   }

//   swap(arr, start, swapIdx);
//   console.log(arr);

//   return swapIdx;
// }

// !: Optimized Pivot function
function pivot(arr, start = 0, end = arr.length) {
  // !: Get the the first element as a pivot value
  const pivotValue = arr[start];
  // !: Keep tracking of the swapIdx (the final place where the pivotValue go)
  let swapIdx = start;

  // !: Start the loop from the second element in the array until the end
  for (let i = start + 1; i < end; i++) {
    // !: Check if the pivotValue is greater than the element in "i" position
    // !: If is increment the "swapIdx" value by 1
    // !: And swap the element int "swapIdx" position with the element in the "i" position
    if (pivotValue > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // !: At the end place the "pivotValue" at the "swapIdx" position
  swap(arr, start, swapIdx);
  console.log(arr);
  return swapIdx;
}

console.log(pivot([4, 0, 2, 1, 5, 7, 6, 3]));
