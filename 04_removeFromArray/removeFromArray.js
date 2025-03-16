const removeFromArray = function(arr, ...args) {
    // Find index of something
    for (let i = 0; i < args.length; i++) {
        while (arr.indexOf(args[i]) > -1) {
            arr.splice(arr.indexOf(args[i]), 1);
        }
    }
    // If it's greater than -1, delete
    // Else return
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
