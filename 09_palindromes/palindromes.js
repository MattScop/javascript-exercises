const palindromes = function (string) {    
    const joined = (Array.from(string).filter(singleLetter => {
        if (singleLetter.match(/[a-zA-Z]/)) return true
    }));

    const newArr = [];
    
    for (let i = 0, z = joined.length - 1; i < joined.length; i++, z--) {
        if (joined[i].toLowerCase().match(joined[z].toLowerCase()))  {
            newArr.push(joined[i])
        } 
    }

    return (newArr.join('') === joined.join('')) ? true : false
};

// Do not edit below this line
module.exports = palindromes;
