const ball = document.querySelector(".ball"),
    btn = document.querySelector(".btn-action"),
    spring = document.querySelector(".spring"),
    fill = document.querySelector(".fill");

const stretchSpring = () => {
    fill.style.animationPlayState = "running";
    spring.style.animationPlayState = "running";

    btn.textContent = "Puść sprężynę";

    btn.removeEventListener("mousedown", stretchSpring);
    btn.removeEventListener("touchstart", stretchSpring);
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
    btn.textContent = `Moc uderżenia to ${(powerPercent * 100).toFixed()}%`;
    fill.style.animationPlayState = "paused";

    document.documentElement.style.setProperty(
        "--power-x",
        `${30 + powerPercent * 60}%`
    );
    ball.style.animation =
        "fly-ball-x 1s 1 forwards .15s cubic-bezier(0.17, 0.67, 0.6, 1), fly-ball-y 1s 1 forwards .15s linear";

    document.documentElement.style.setProperty(
        "--spring-left",
        getComputedStyle(spring).left
    );

    spring.style.animation = "release-spring 0.2s forwards linear";

    //zabłokowanie kliknięcia

    btn.removeEventListener("mouseup", stretchSpring);
    btn.removeEventListener("touchend", stretchSpring);
};

const resetAnimation = () => {
    console.log("reset animation");
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
btn.addEventListener("touchstart", stretchSpring);
btn.addEventListener("touchend", releaseSpring);
