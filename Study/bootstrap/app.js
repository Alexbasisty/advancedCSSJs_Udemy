document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  const myProgressBar = document.querySelector("#myProgressBar");
  console.log(myProgressBar);
  setInterval(() => {
    counter += 1;
    myProgressBar.style.width = `${counter}%`;
    myProgressBar.innerText = `${counter}%`;
  }, 250);
});
