//fun(a,b) => sum if a<b {(a+1)+(b-1)} || if a>b (a-1)+(b+1)

const sumAll = function (a, b) {
    let sum = a + b;
    let mySum = 0;
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') return "ERROR";

    if (a < b && b % 2 === 0) {
        for (; a < b; a++, b--) {
            mySum += sum
        }
        return mySum

    } else if (a < b && b % 2 !== 0) {
        for (; a <= b; a++, b--) {
            if (a === b) {
                sum = a
            }
            mySum += sum
        }
        return mySum

    } else if (a > b && b % 2 === 0) {
        for (; a > b; a--, b++) {
            mySum += sum
        }
        return mySum

    } else if (a > b && b % 2 !== 0) {
        for (; a >= b; a--, b++) {
            if (a === b) {
                sum = b
            }
            mySum += sum;
        }
    }
    return mySum
}

// Do not edit below this line
module.exports = sumAll;
