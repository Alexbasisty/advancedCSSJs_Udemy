import "../sass/style.scss";

function Doggo() {
  this.url = "https://dog.ceo/api/";
  this.imgEl = document.querySelector(".featured-dog img");
  this.init();
}

Doggo.prototype.listBreeds = function () {
  return fetch(`${this.url}breeds/list/all`)
    .then((resp) => resp.json())
    .then((data) => data.message);
};

Doggo.prototype.getRandomImage = function () {
  return fetch(`${this.url}breeds/image/random`)
    .then((resp) => resp.json())
    .then((data) => data.message);
};
Doggo.prototype.getRandomImageByBreed = function (breed) {
  return fetch(`${this.url}breed/${breed}/images/random`)
    .then((resp) => resp.json())
    .then((data) => data.message);
};

Doggo.prototype.init = function () {
  this.getRandomImage().then((src) => this.imgEl.setAttribute("src", src));
  this.listBreeds().then((breeds) => console.log(breeds));
};

document.addEventListener("DOMContentLoaded", () => {
  new Doggo();
});
// class Doggo {
//   constructor() {
//     this.url = "https://dog.ceo/api/";
//     this.imgEl = document.querySelector(".featured-dog img");
//     this.init();
//   }
//   listBreeds() {
//     return fetch(`${this.url}breeds/list/all`)
//       .then((resp) => resp.json())
//       .then((data) => data.message);
//   }

//   getRandomImage() {
//     return fetch(`${this.url}breeds/image/random`)
//       .then((resp) => resp.json())
//       .then((data) => data.message);
//   }
//   getRandomImageByBreed(breed) {
//     return fetch(`${this.url}breed/${breed}/images/random`)
//       .then((resp) => resp.json())
//       .then((data) => data.message);
//   }

//   init() {
//     this.getRandomImage().then((src) => this.imgEl.setAttribute("src", src));
//     this.listBreeds().then((breeds) => console.log(breeds));
//   }
// }
