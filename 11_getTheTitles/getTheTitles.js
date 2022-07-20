const getTheTitles = function(arr) {
    // const bookArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //      bookArr.push(arr[i].title)
    // }
    // return bookArr

    // METHOD 2
    return arr.map(book => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
