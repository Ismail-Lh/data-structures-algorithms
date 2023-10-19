function mergeSortedArrays_1(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  const mergedArray = [];

  let i = 0;
  let j = 0;

  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i <= arr1.length - 1) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j <= arr1.length - 1) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

function mergeSortedArrays_2(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArray = [];

  let i = 0;
  let j = 0;

  let arr1Item = arr1[i];
  let arr2Item = arr2[j];

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      i++;
      arr1Item = arr1[i];
    } else {
      mergedArray.push(arr2Item);
      j++;
      arr2Item = arr2[j];
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays_1([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays_2([1, 3, 5], [2, 4, 6]));
