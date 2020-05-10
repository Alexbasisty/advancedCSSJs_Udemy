const add = (...numbers) => {
    // console.log(numbers);
    console.log(numbers.reduce((sum, curr) => sum + curr));
};

module.exports = add;
