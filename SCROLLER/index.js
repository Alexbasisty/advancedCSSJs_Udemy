document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");

    const rootElement = document.getElementById("root");
    const sections = document.querySelectorAll("section");
    let currSectionIndex = 0;

    document.addEventListener("mousewheel", (event) => {
        const direction = event.wheelDelta < 0 ? 1 : -1;

        if (direction === 1) {
            const isLastSection = currSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const isFirstSection = currSectionIndex === 0;
            if (isFirstSection) return;
        }

        currSectionIndex = currSectionIndex + direction;

        console.log(currSectionIndex);
    });
});
