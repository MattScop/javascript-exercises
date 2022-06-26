const removeFromArray = function(arr, ...otherNum) {
    nextNum: for (let i = 0; i < otherNum.length; i++) {
        if (arr.includes(otherNum[i])) {
            let index = arr.indexOf(otherNum[i]);
            arr.splice(index, 1);
        } else {
            continue nextNum;
        }
    }      
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
