// let tmp = arr[j];
// arr[j] = arr[j + 1];
// arr[j + 1] = tmp;

const swap = (arr, idx) =>
  ([arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]]);

// !: BIG-O ---> O(n²)
function bubble_sort(arr) {
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

console.log(bubble_sort([5, 0, 1, 8, 6, 2, 3, 4]));
