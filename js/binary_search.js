// # The binary_search function takes a sorted array and an item.
// # list = generate_random_sorted_list()

// # If the item is in the array, the function returns its position.
// # You’ll keep track of what part of the array you have to search through.
// # At the beginning, this is the entire array:
// # low = 0
// # high = len(list) - 1

// # Each time, you check the middle element:
// # mid is rounded down by Python automatically if (low + high) isn’t an even number.
// # mid = (low + high) / 2
// # guess = list[mid]

// # If the guess is too low, you update low accordingly:
// # if guess < item:
// # low = mid + 1

// # And if the guess is too high, you update high.
// # if guess > item:
// # high = mid - 1

const binary_search = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const arr = [
  1, 4, 7, 9, 11, 12, 18, 20, 23, 25, 26, 30, 47, 52, 62, 69, 75, 82, 88, 92,
  95, 96, 99, 100,
];

console.log(binary_search(arr, 4));
