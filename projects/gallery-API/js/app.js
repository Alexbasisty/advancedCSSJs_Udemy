import "../sass/style.scss";

function listBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => data.message);
}

function getRandomImage() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((data) => data.message);
}
const imgTag = document.querySelector("img");

getRandomImage().then((imgSrc) => imgTag.setAttribute("src", imgSrc));
