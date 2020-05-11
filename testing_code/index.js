document.addEventListener("DOMContentLoaded", () => {
    // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

    var moveZeros = function (arr) {
        // TODO: Program me
        const noZero = arr.filter((el) => el !== 0);
        const zero = arr.filter((el) => el === 0);

        return [...noZero, ...zero];
    };
    console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
});

// password validator

function validate(password) {
    // return (
    //     /[A-Z]/.test(password) &&
    //     /[a-z]/.test(password) &&
    //     /[0-9]/.test(password) &&
    //     password.length > 6
    // );

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}

console.log(validate("aDdas41"));
