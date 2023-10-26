// ! 1 -> Start by picking the second element int the array
// ! 2 -> Compare the second element with the one before it and swap if necessary
// ! 3 -> Continue to the next element and if it is in the correct order, iterate through the sorted portion to place the element in the correct place
// ! 4 -> Repeat until the array is sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j = i - 1;
    // console.log(`outside the while loop arr = ${arr}`);
    // console.log("-------------------------------------------------");
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      // console.log(`inside the while loop arr = ${arr}`);
      // console.log(`inside the while loop j = ${j}`);
      j--;
    }
    // console.log(`outside the while loop j = ${j}`);
    arr[j + 1] = tmp;
  }

  return arr;
}
