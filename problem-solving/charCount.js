// *: 1-make object to return at end
// *: 2- loop over string, for each character
//  *: 2.1- if the char is a number/letter and is a key in object, add one to count
// *: 2.2- if the char is a number/letter and not in object, add it to object and set value to 1
// *: 2.3- if character is something else (space, period, etc.) don't do anything
//  *: 3- return object at end

// !-------------------------V1---------------------------!

function charCountV1(str) {
  const lowercaseStr = str.replace(/ /g, "").toLowerCase();

  let charCount = {};

  for (let i = 0; i < lowercaseStr.length; i++) {
    if (/[a-z0-9]/.test(char)) {
      if (charCount[char] > 0) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }

  return charCount;
}

// !-------------------------V2---------------------------!
function charCountV2(str) {
  const lowercaseStr = str.replace(/ /g, "").toLowerCase();

  let charCount = {};

  for (let i = 0; i < lowercaseStr.length; i++) {
    let char = lowercaseStr[i];
    if (/[a-z0-9]/.test(char))
      charCount[char] > 0 ? charCount[char]++ : (charCount[char] = 1);
  }

  return charCount;
}

// !-------------------------V3---------------------------!
function charCountV3(str) {
  const lowercaseStr = str.replace(/ /g, "").toLowerCase();

  let charCount = {};

  for (const char of lowercaseStr) {
    if (/[a-z0-9]/.test(char))
      // charCount[char] > 0 ? charCount[char]++ : (charCount[char] = 1);
      charCount[char] = ++charCount[char] || 1;
  }

  return charCount;
}

// !-------------------------V4---------------------------!
function charCountV4(str) {
  const lowercaseStr = str.replace(/ /g, "").toLowerCase();

  let charCount = {};

  for (const char of lowercaseStr) {
    if (isAlphaNumeric(char))
      // charCount[char] > 0 ? charCount[char]++ : (charCount[char] = 1);
      charCount[char] = ++charCount[char] || 1;
  }

  return charCount;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // *: numeric (0-9)
    !(code > 64 && code < 91) && // *: upper alpha (A-Z)
    !(code > 96 && code < 123) // *: lower alpha (a-z)
  ) {
    return false;
  }

  return true;
}

console.log(charCountV4("z hello world HI THERE z!!!!!!"));
