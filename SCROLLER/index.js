document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");

    const rootElement = document.getElementById("root");
    const sections = document.querySelectorAll("section");

    document.addEventListener("mousewheel", (event) => {
        console.log(event.wheelDelta);
    });
});
