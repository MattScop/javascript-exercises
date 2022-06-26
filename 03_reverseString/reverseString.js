const reverseString = function(string) {
    let splitStr = string.split("");
    let reverseStr = splitStr.reverse();
    let strJoin = reverseStr.join("");

    return strJoin;
};

// Do not edit below this line
module.exports = reverseString;
