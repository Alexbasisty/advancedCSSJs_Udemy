import "../sass/style.scss";

const Doggo = () => {
  this.url = "https://dog.ceo/api/";
};

Doggo.prototype.listBreeds = () => {
  return fetch(`${this.url}breeds/list/all`)
    .then((resp) => resp.json())
    .then((data) => data.message);
};
Doggo.prototype.getRandomImage = () => {
  return fetch(`${this.url}breeds/image/random`)
    .then((resp) => resp.json())
    .then((data) => data.message);
};
Doggo.prototype.getRandomImageByBreed = (breed) => {
  return fetch(`${this.url}breed/${breed}/images/random`)
    .then((resp) => resp.json())
    .then((data) => data.message);
};
