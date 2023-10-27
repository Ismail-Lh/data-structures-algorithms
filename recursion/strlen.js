function strlen(str) {
  let length = 0;

  while (str[length] !== undefined) length++;

  return length;
}

function strlenRecursive(str, index = 0) {
  if (str[index] === undefined) return 0;

  return 1 + strlenRecursive(str, index + 1);
}

console.log(strlen("hello"));
console.log(strlenRecursive("hello"));
