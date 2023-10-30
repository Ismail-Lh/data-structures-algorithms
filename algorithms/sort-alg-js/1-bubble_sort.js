// let tmp = arr[j];
// arr[j] = arr[j + 1];
// arr[j + 1] = tmp;

const swap = (arr, idx) =>
  ([arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]]);

// !: BIG-O ---> O(n²)
function bubbleSort(arr) {
  const last_index = arr.length - 1;

  for (let i = last_index; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

function bubbleSort_2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;

        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

function bubbleSort_3(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[i]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 0, 1, 8, 6, 2, 3, 4]));
console.log("----------------------------------------");
console.log(bubbleSort_2([5, 0, 1, 8, 6, 2, 3, 4]));
console.log("----------------------------------------");
console.log(bubbleSort_3([5, 0, 1, 8, 6, 2, 3, 4]));
