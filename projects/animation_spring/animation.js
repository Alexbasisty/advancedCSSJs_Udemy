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
    const fillStyle = getComputedStyle(fill);
    const fillWidth = parseInt(fillStyle.width, 10);
    const barWidth = parseInt(
        getComputedStyle(document.querySelector(".bar")).width,
        10
    );
    const powerPercent = (fillWidth / barWidth).toFixed(2);

    btn.style.color = "black";
    btn.textContent = `Moc uderżenia to ${powerPercent * 100}%`;
};

const resetAnimation = () => {
    console.log("reset animation");
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
btn.addEventListener("touchstart", stretchSpring);
btn.addEventListener("touchend", releaseSpring);
