function factorialRecursive(num) {
  if (num === 2) return 2;

  return num * factorialRecursive(num - 1);
}

function factorialIterative(num) {
  if (num === 1 || num === 2) return num;

  let fact = 1;

  for (let i = 2; i <= num; i++) fact *= i;

  return fact;
}

console.log(factorialRecursive(5));
console.log(factorialIterative(5));
