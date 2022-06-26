const repeatString = function(string, num) {
    let myStr = "";
    for (let i = 0; i < num; i++) {
        myStr += string;
    }
    if (num < 0) {
        return "ERROR";
    } else {
    return myStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
