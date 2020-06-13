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

/*
spinner v3
*/

const spinnerRAF = document.querySelector(".v3");

let degRAF = 0;
const degChangeRAF = 6;

const rotateRAF = () => {
    degRAF += degChangeRAF;
    spinnerRAF.style.transform = `rotate(${degRAF}deg)`;

    requestAnimationFrame(rotateRAF);
};

rotateRAF();

/*
spinner v4
*/

const spinnerRAF2 = document.querySelector(".v4");

let degRAF2 = 0;
const degChangeRAF2 = 6;
let time2 = performance.now();

const rotateRAF2 = (currentT) => {
    if (currentT - time2 > 16) {
        time2 = currentT;
        degRAF2 += degChangeRAF2;
        spinnerRAF2.style.transform = `rotate(${degRAF2}deg)`;
    }

    requestAnimationFrame(rotateRAF2);
};

rotateRAF2();
