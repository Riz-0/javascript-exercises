const palindromes = function (str) {
  str = str
    .toLowerCase()
    .split("")
    .filter(
      (char) => char !== "!" && char !== "," && char !== "." && char !== " "
    )
    .join("");
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
