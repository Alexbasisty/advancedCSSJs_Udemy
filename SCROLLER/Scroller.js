class Scroller {
    constructor() {
        const rootElement = document.getElementById("root");
        this.sections = document.querySelectorAll("section");
        this.currSectionIndex = 0;
        this.isThrottled = false;
    }

    listenScroll = () => {
        if (this.isThrottled) return;
        this.isThrottled = true;

        setTimeout(() => {
            this.isThrottled = false;
        }, 700);

        const direction = event.wheelDelta < 0 ? 1 : -1;
        scroll(direction);
    };
}
