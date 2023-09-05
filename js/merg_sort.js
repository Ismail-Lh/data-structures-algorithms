// * -- Merging sorted arrays implementation

// Define a function called merge that takes two sorted arrays, arr1 and arr2, and merges them into a single sorted array.
function merge(arr1, arr2) {
  // Initialize an empty array called mergedArr to store the merged result.
  let mergedArr = [];
  // Initialize two pointers, i and j, to keep track of the current position in arr1 and arr2, respectively.
  let i = 0;
  let j = 0;

  // Start a while loop that continues as long as both i and j are within the bounds of their respective arrays.
  while (i < arr1.length && j < arr2.length) {
    // Compare the current elements at positions i and j in arr1 and arr2.
    if (arr2[j] > arr1[i]) {
      // If the element in arr2 is greater than the element in arr1, push the element from arr1 into mergedArr.
      mergedArr.push(arr1[i]);
      // Increment the pointer i to move to the next element in arr1.
      i++;
    } else {
      // If the element in arr1 is greater than or equal to the element in arr2, push the element from arr2 into mergedArr.
      mergedArr.push(arr2[j]);
      // Increment the pointer j to move to the next element in arr2.
      j++;
    }
  }

  // After the first while loop, there may be remaining elements in arr1 or arr2 that were not processed.
  // The following two while loops handle those remaining elements.

  // Add any remaining elements from arr1 to mergedArr.
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  // Add any remaining elements from arr2 to mergedArr.
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  // Return the merged and sorted array as the result of the merge function.
  return mergedArr;
}

console.log(merge([1, 4, 5, 6, 9], [-1, 0, 2, 3, 7, 10, 12]));
