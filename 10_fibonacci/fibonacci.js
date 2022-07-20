const fibonacci = function(n) {
    // fibo n = (n-1) + (n-2)
    if (n < 0) return "OOPS"
    const fiboArray = [];
    
    for (let i = 0; i < n; i++) {
        const fiboNumber = () => {
            switch (true) {
                case i-1 <= 0:
                    return 1
            
                case i-2 <= 0:
                    return (i-1) + 1

                default:
                    return fiboArray[i-1] + fiboArray[i-2]
            }
        }
        fiboArray.push(fiboNumber());
    }
    return fiboArray[n-1]
};

// Do not edit below this line
module.exports = fibonacci;
