const swap = (arr, indx1, indx2) =>
  ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);

// !: BIG-O ---> O(n²)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) swap(arr, i, min);
  }

  return arr;
}

console.log(selectionSort([5, 4, 7, 3, 6, 8, 1]));
