// * 1- We will start by selecting the second element in the array
// * 2- Afterward, we will compare that element to the element before it and act accordingly (swap if necessary)
// * 3- We will go to the next element, and then we again check where it fits in the sorted left portion of the array
// * 4- The algorithm repeats the logic until the array is sorted
// * 4- Return the array

function insertionAlg(arr) {
  // ! 1- select the second number in the array
  for (var i = 1; i < arr.length; i++) {
    // ! 2- Declare the current value of the selected number
    const currentValue = arr[i];

    // ! 3- Compare the selected number (currentValue) by the number before it (i - 1)
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]; // ?: arr[0 + 1] = arr[0] ---> arr[1] = arr[0] ---> [99, 99, 44, 15, 10, 8, 5]
    }

    // !: 4- Swap Values
    arr[j + 1] = currentValue; // ?: arr[0 - 1] = arr[1] ---> arr[0] = 2 ---> [2, 99, 44, 15, 10, 8, 5]
  }

  return arr;
}

// console.log(insertionAlg([99, 2, 44, 15, 10, 8, 5]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currVal = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currVal;
  }

  return arr;
}

console.log(insertionSort([99, 2, 44, 15, 10, 8, 5]));
