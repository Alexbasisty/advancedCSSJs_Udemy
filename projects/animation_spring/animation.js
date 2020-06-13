const ball = document.querySelector(".ball"),
    btn = document.querySelector(".btn-action"),
    spring = document.querySelector(".spring"),
    fill = document.querySelector(".fill");

const stretchSpring = () => {
    fill.style.animationPlayState = "running";
    spring.style.animationPlayState = "running";

    btn.textContent = "Puść sprężynę";
};

const releaseSpring = () => {
    console.log("puszczamy");
};

const resetAnimation = () => {
    console.log("reset animation");
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
btn.addEventListener("touchstart", stretchSpring);
btn.addEventListener("touchend", releaseSpring);
