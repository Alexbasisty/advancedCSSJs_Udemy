const add = (...numbers) => {
    return numbers.reduce((sum, curr) => sum + curr);
};

module.exports = add;
