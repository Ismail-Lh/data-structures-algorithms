function binary_search_recursion(arr, item, left, right) {
  if (left > right) {
    return null;
  } else {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === item) {
      return mid;
    }

    if (arr[mid] < item) {
      binary_search_recursion(arr, item, mid + 1, right);
    }

    binary_search_recursion(arr, item, left, mid - 1);
  }
}

const arr = [
  1, 4, 7, 9, 11, 12, 18, 20, 23, 25, 26, 30, 47, 52, 62, 69, 75, 82, 88, 92,
  95, 96, 99, 100,
];

const left = 0;
const right = arr.length - 1;

console.log(binary_search_recursion(arr, 30, left, right));
