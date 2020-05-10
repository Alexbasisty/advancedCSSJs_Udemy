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
