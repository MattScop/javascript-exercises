const findTheOldest = function(array) {
    const newObj = array.map(person => {
        const obj = {};
        obj.name = person.name;
        if (person.yearOfDeath) {
            obj.lifespan = person.yearOfDeath - person.yearOfBirth;
            return obj
        } else {
            currentYear = new Date().getFullYear();
            obj.lifespan = currentYear - person.yearOfBirth;
            return obj
        }
    }).sort((a,b) => {
        return b.lifespan - a.lifespan
    });
    return newObj[0]
};

// Do not edit below this line
module.exports = findTheOldest;
