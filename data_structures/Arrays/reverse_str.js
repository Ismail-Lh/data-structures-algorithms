function reverse_str_1(str) {
  if (!str || str.length < 2 || typeof str !== "string") return false;

  const rev_str = [];

  let last_index = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    rev_str.push(str[last_index]);

    last_index--;
  }

  return rev_str.join("");
}

function reverse_str_2(str) {
  if (!str || str.length < 2 || typeof str !== "string") return false;

  const rev_str = [];

  const total_chars = str.length;

  for (let i = total_chars; i >= 0; i--) rev_str.push(str[i]);

  return rev_str.join("");
}

const reverse_str_3 = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") return false;

  return str.split("").reverse().join("");
};

function reverse_str_4(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverse_str_5(str) {
  const reversed_str = [];
  let lastIndex = str.length - 1;

  for (let i = 0; i <= str.length - 1; i++, lastIndex--) {
    reversed_str[i] = str[lastIndex];
  }

  return reversed_str.join("");
}

console.log(reverse_str_1("hello world"));
console.log(reverse_str_2("hello world"));
console.log(reverse_str_3("hello world"));
console.log(reverse_str_4("hello world"));
