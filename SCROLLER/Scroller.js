class Scroller {
    constructor(rootSelector) {
        const rootElement = document.querySelector(rootSelector);
        this.sections = document.querySelectorAll("section");
        const visibleSection = [...this.sections].findIndex(
            this.isScrolledIntoView
        );
        this.currSectionIndex = visibleSection < 0 ? 0 : visibleSection;
        // this.currSectionIndex = Math.max(visibleSection, 0)
        this.isThrottled = false;
    }

    isScrolledIntoView = (el) => {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = Math.floor(rect.bottom);
        const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
        return isVisible;
    };

    listenScroll = (event) => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(() => {
            this.isThrottled = false;
        }, 700);

        const direction = event.wheelDelta < 0 ? 1 : -1;

        this.scroll(direction);
    };

    scroll = (direction) => {
        console.log(direction);
        if (direction === 1) {
            const isLastSection =
                this.currSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const isFirstSection = this.currSectionIndex === 0;
            if (isFirstSection) return;
        }

        this.currSectionIndex = this.currSectionIndex + direction;

        this.scrollToCurrSection();
    };
    scrollToCurrSection = () => {
        this.sections[this.currSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
}
