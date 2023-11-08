// !: Time Complexity => O(n²)
// !: Space Complexity => O(1)
function firstRecurringBrute(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] === arr[i]) return arr[i];
    }
  }

  return undefined;
}

// *: Find the first recurring characters using a Hash Map
// !: Time Complexity => O(n)
// !: Space Complexity => O(n)

function firstRecurringHash(arr) {
  let map = {};

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(i);
  //   if (map[arr[i]]) return arr[i];

  //   map[arr[i]] = 1;
  // }

  for (let char of arr) {
    if (map[char]) return char;

    map[char] = 1;
  }

  return undefined;
}

console.log(firstRecurringBrute([2, 5, 4, 2, 3, 5, 1, 2, 4]));
console.log("-----------------------------");
console.log(firstRecurringHash([2, 5, 4, 2, 3, 5, 1, 2, 4]));
