function linear_search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return false;
}

console.log(linear_search([1, 2, 4, 7, 6], 10));
