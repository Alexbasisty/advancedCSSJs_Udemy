const spinner = document.querySelector(".v2");

const fps = (1000 / 60).toFixed(2);
let deg = 0;
const degChange = 6;

const rotate = () => {
    deg += degChange;
    spinner.style.transform = `rotate(${deg}deg)`;
};

setInterval(rotate, fps);

/*
 requestAnimationFrame
*/

const rAFDiv = document.querySelector(".rAF");
let time = 0,
    frames = 0,
    beforeTime = performance.now(),
    result = 0;

const counter = (currentTime) => {
    if (currentTime - beforeTime > 100) {
        result++;
        beforeTime = currentTime;
    }

    frames++;
    rAFDiv.textContent = `Czas: ${time.toFixed(
        1
    )}; Liczba frame-ów: ${frames}; fps: ${(
        frames / time
    ).toFixed()}; Punkty: ${result}; Aktualny czas wywołania rAF: ${currentTime}`;
    requestAnimationFrame(counter);
};

const timer = () => {
    time += 0.1;
    setTimeout(timer, 100);
};

timer();
counter();
