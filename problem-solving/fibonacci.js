function fibonacci_sequence() {
  let x = 0;
  let y = 1;
  let sum = 0;
  let sequence = "";

  for (let count = 0; count < 50; count++) {
    sum = x + y;
    x = y;
    y = sum;

    sequence += `${sum}, `;
  }

  console.log(sequence);
}

fibonacci_sequence();
