import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const imagesContainerEl = document.querySelector(".slider__images-container");
  const img1El = document.querySelector(".slider__image-container--first img");
  const img2El = document.querySelector(".slider__image-container--second img");
  let drugging = false;
  let imagesContainerLeftOffset = imagesContainerEl.offsetLeft;
  const img2ContainerEl = document.querySelector(
    ".slider__image-container--second"
  );
  const handleEl = document.querySelector(".slider__handle");
  const dividerEL = document.querySelector(".slider__divider");
  let imagesContainerElWidth;

  function getOffset(clientX) {
    const offset = clientX - imagesContainerLeftOffset;
    if (offset < 0) {
      return 0;
    } else if (offset > imagesContainerElWidth) {
      return imagesContainerElWidth;
    } else {
      return offset;
    }
  }

  function move(clientX) {
    const offset = getOffset(clientX);
    const percent = (offset / imagesContainerElWidth) * 100;
    dividerEL.style.left = `${percent}%`;
    img2ContainerEl.style.width = `${percent}%`;
  }

  function initEvents() {
    handleEl.addEventListener("mousedown", () => {
      drugging = true;
    });
    handleEl.addEventListener("mouseup", () => {
      drugging = false;
    });
    handleEl.addEventListener("touchstart", () => {
      drugging = true;
    });
    handleEl.addEventListener("touchend", () => {
      drugging = false;
    });

    window.addEventListener("mousemove", (event) => {
      if (drugging) {
        move(event.clientX);
      }
    });
    window.addEventListener("touchmove", (event) => {
      if (drugging) {
        move(event.touches[0].clientX);
      }
    });
  }

  function adjustImageSize() {
    imagesContainerLeftOffset = imagesContainerEl.offsetLeft;
    imagesContainerElWidth = imagesContainerEl.offsetWidth;
    img1El.style.width = imagesContainerElWidth + "px";
    img2El.style.width = imagesContainerElWidth + "px";
  }
  window.addEventListener("resize", adjustImageSize);
  adjustImageSize();
  initEvents();
});
