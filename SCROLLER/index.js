document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");

    const rootElement = document.getElementById("root");
    const sections = document.querySelectorAll("section");
    let currSectionIndex = 0;
    let isThrottled = false;

    document.addEventListener("mousewheel", (event) => {
        if (isThrottled) return;
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
        }, 700);

        const direction = event.wheelDelta < 0 ? 1 : -1;

        if (direction === 1) {
            const isLastSection = currSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const isFirstSection = currSectionIndex === 0;
            if (isFirstSection) return;
        }

        currSectionIndex = currSectionIndex + direction;

        sections[currSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});
