const ball = document.querySelector(".ball"),
    btn = document.querySelector(".btn-action"),
    spring = document.querySelector(".spring"),
    fill = document.querySelector(".fill");

const stretchSpring = () => {
    fill.style.animationName = "fill";
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

    ball.addEventListener("animationend", resetAnimation);

    const myRules = document.styleSheets[0].cssRules;

    for (const i of myRules) {
        if (i.name === "fly-ball-x") {
            i.appendRule(`100% {left: ${30 + powerPercent * 60}%}`);
        }
    }
};

const resetAnimation = () => {
    ball.removeEventListener("animationend", resetAnimation);

    // reset

    setTimeout(() => {
        btn.addEventListener("mousedown", stretchSpring);
        btn.addEventListener("mouseup", releaseSpring);
        btn.addEventListener("touchstart", stretchSpring);
        btn.addEventListener("touchend", releaseSpring);

        btn.style.color = "white";
        btn.textContent = "Naciągnij sprzężynę";

        spring.style.animation = "";
        ball.style.animation = "";
        fill.style.animationName = "none";
    }, 2000);
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
btn.addEventListener("touchstart", stretchSpring);
btn.addEventListener("touchend", releaseSpring);
