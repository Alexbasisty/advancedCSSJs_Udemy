const multiply = (...numbers) => {
    return numbers.reduce((sum, curr) => sum * curr);
};

module.exports.multiply = multiply;
module.exports.description = "mnożenie to działanie matematyczne";
