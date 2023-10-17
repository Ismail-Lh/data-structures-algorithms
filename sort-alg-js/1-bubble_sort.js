function bubble_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

console.log(bubble_sort([5, 3, 4, 1, 2, 0, -2, -1, -10]));
