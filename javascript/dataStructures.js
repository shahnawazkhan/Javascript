// level {1/2/3}

// level 2
function odd(array) {
  const arr = array.filter((n) => n % 2 != 0);
  console.log(arr);
}

function vowel(str) {
  const newStr = str.replace(/([aeiou])/g, function (match) {
    return match.toUpperCase();
  });
  console.log(newStr);
}

function Max(array) {
  const max = Math.max(...array);
  console.log(max);
}
