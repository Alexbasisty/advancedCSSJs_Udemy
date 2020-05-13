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

//a function that when given a URL as a string, parses out just the domain name and returns it as a string

// function domainName(url) {
//     //your code here
//     const a = url.split(/[:/.]/g).filter((item) => item.length !== 0);
//     if (
//         (a[0] === "http" || a[0] === "www" || a[0] === "https") &&
//         a[1] !== "www"
//     ) {
//         return a[1];
//     } else if (a[0] !== "http" && a[0] !== "www" && a[0] !== "https") {
//         return a[0];
//     } else {
//         return a[2];
//     }
// }

// sec option

function domainName(url) {
    return url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("https://youtube.com"));
