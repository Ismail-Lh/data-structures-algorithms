// Merging Arrays Pseudocode
// 1- Create an empty array, take a look at the smallest values in each input array
// 2- While there are still values we haven't looked at...
//    2-1 If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//    2-2 If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// 3- Once we exhaust one array, push in all remaining values from the other array

// function mergerSortedArrays(arr1, arr2) {
//   const mergedArray = [];

//   let i = 0;
//   let j = 0;

//   let arr1Item = arr1[i];
//   let arr2Item = arr2[j];

//   while (arr1Item || arr2Item) {
//     let item;

//     if (!arr2Item || arr1Item < arr2Item) {
//       item = arr1Item;
//       i++;

//       arr1Item = arr1[i];
//     } else {
//       item = arr2Item;
//       j++;

//       arr2Item = arr2[j];
//     }

//     mergedArray.push(item);
//   }

//   // while (i < arr1.length) {
//   //   mergedArray.push(arr1[i]);
//   //   i++;
//   // }

//   // while (j < arr2.length) {
//   //   mergedArray.push(arr2[j]);
//   //   j++;
//   // }

//   return mergedArray;
// }

function merge(arr1, arr2) {
  const mergedArray = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    let item;
    if (arr1[i] < arr2[j]) {
      item = arr1[i];
      i++;
    } else {
      item = arr2[j];
      j++;
    }

    mergedArray.push(item);
  }

  const arr1Remaining = arr1.splice(i);
  const arr2Remaining = arr2.splice(j);

  return [...mergedArray, ...arr1Remaining, ...arr2Remaining];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let arrMid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, arrMid));
  let right = mergeSort(arr.slice(arrMid));

  return merge(left, right);
}

console.log(mergeSort([1, 4, 7, 9, 2, 5, 12]));
