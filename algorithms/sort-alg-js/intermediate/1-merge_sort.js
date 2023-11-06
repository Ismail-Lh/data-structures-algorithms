// **************** Merging Sorted Arrays Pseudocode ****************

// ?: 1- Create an empty array, take a look at the smallest values in each input array

// ?: 2- While there are still values we haven't looked at...
//    ?: 2.1-  If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//    ?: 2.2- If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

// ?: 3- Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
  // !: 1- Initialize an empty array called mergedArr to store the merged result.
  const mergedArray = [];

  // !: 2- Initialize two pointers, i and j, to keep track of the current position in arr1 and arr2, respectively.
  let i = 0,
    j = 0;

  // !: 3- Start a while loop that continues as long as both i and j are within the bounds of their respective arrays.
  while (i < arr1.length && j < arr2.length) {
    let item;

    // !: 3.1- If the element in arr2 is greater than the element in arr1, push the element from arr1 into mergedArr.
    if (arr1[i] < arr2[j]) {
      item = arr1[i];

      // !: Increment the pointer i to move to the next element in arr1.
      i++;
    } else {
      // !: 3.2- If the element in arr1 is greater than or equal to the element in arr2, push the element from arr2 into mergedArr.
      item = arr2[j];

      // !: Increment the pointer j to move to the next element in arr2.
      j++;
    }

    mergedArray.push(item);
  }

  // !: After the first while loop, there may be remaining elements in arr1 or arr2 that were not processed.
  // !: 4- The following two while loops handle those remaining elements.

  // !: 4.1- Add any remaining elements from arr1 to mergedArr.
  const arr1Remaining = arr1.splice(i);

  // !: 4.2- Add any remaining elements from arr2 to mergedArr.
  const arr2Remaining = arr2.splice(j);

  // !: 5- Return the merged and sorted array as the result of the merge function.
  return [...mergedArray, ...arr1Remaining, ...arr2Remaining];
}

// **************** MergeSort Pseudocode ****************

// ?: 1- Break up the array into halves until you have arrays that are empty or have one element

// ?: 2- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

// ?: 3- Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr) {
  // !: 1- Base case: If the array has one or fewer elements, it is already sorted.
  if (arr.length <= 1) return arr;

  // !: 2- Find the middle index of the array.
  let arrMidIndex = Math.floor(arr.length / 2);

  // !: 3- Recursively call mergeSort on the left half of the array and store the result in the 'left' variable.
  let left = mergeSort(arr.slice(0, arrMidIndex));

  // !: 3- Recursively call mergeSort on the right half of the array and store the result in the 'right' variable.
  let right = mergeSort(arr.slice(arrMidIndex));

  // !: 4- Call the 'merge' function to merge the sorted 'left' and 'right' arrays and return the result.
  return merge(left, right);
}
