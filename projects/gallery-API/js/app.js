import "../sass/style.scss";

function listBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
      return data.message;
    });
}

function getRandomImage() {
  return fetch("https://dog.ceo/api/breeds/image/random");
}
