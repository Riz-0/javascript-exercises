const reverseString = function(str) {
    // Split the string
    let strArray = str.split('')
    // Reverse the array
    let strArrayReverse = [];
    for (let i = -1; i > 0 - strArray.length - 1; i--) {
        strArrayReverse.push(strArray.at(i));
    }
    // Join the string
    return strArrayReverse.join('');

    // NOTE TO SELF: str.split("").reverse().join(""); works too. e.e
};

// Do not edit below this line
module.exports = reverseString;
