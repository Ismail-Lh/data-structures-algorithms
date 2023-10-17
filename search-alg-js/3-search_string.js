// * 1- Loop over the longer string
// * 2- Loop over the short string
// * 3- If the character don't match, break out of the inner loop
// * 4- If the character do match, keep going
// * 5- If you complete the inner loop and find a match, increment the count matches
// * 6- Return the count

// ! ------------------------

function findString(long, short) {
  let count = 0;
  let i = 0;

  while (i < long.length) {
    let j = 0;

    while (j < short.length) {
      if (short[j] !== long[j + i]) break;

      j++;
    }

    if (j === short.length) count++;

    i++;
  }

  return count;
}

console.log(findString("wowomgzomgomgwoamgomgomhjehcfjebc", "omg"));
