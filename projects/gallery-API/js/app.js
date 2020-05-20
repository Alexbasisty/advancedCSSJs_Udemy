import "../sass/style.scss";

function Doggo() {
  this.url = "https://dog.ceo/api/";
  this.imgEl = document.querySelector(".featured-dog img");
  this.backgroundEL = document.querySelector(".featured-dog__background");
  this.tilesEl = document.querySelector(".tiles");
  this.spinnerEl = document.querySelector(".spinner");
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

Doggo.prototype.showAllBreeds = function () {
  this.listBreeds().then((breeds) => {
    for (const breed in breeds) {
      if (breeds[breed].length === 0) {
        this.addBreed(breed);
      } else {
        for (const subBreed of breeds[breed]) {
          this.addBreed(breed, subBreed);
        }
      }
    }
  });
};

Doggo.prototype.addBreed = function (breed, subBreed) {
  let name;
  let type;
  if (typeof subBreed === "undefined") {
    name = breed;
    type = breed;
  } else {
    name = `${breed} ${subBreed}`;
    type = `${breed}/${subBreed}`;
  }

  const tile = document.createElement("div");
  tile.classList.add("tiles__tile");
  const tileContent = document.createElement("div");
  tileContent.classList.add("tiles__tile-content");
  tileContent.innerText = name;
  tileContent.addEventListener("click", () => {
    this.showLoading();
    this.getRandomImageByBreed(type).then((src) => {
      this.imgEl.setAttribute("src", src);
      this.backgroundEL.style.background = `url(${src})`;
      this.hideLoading();
    });
  });
  tile.appendChild(tileContent);
  this.tilesEl.appendChild(tile);
};

Doggo.prototype.init = function () {
  this.showLoading();
  this.getRandomImage().then((src) => {
    this.imgEl.setAttribute("src", src);
    this.backgroundEL.style.background = `url(${src})`;
    this.hideLoading();
  });
  this.showAllBreeds();
};

Doggo.prototype.showLoading = function () {
  this.spinnerEl.classList.add("spinner--visible");
};
Doggo.prototype.hideLoading = function () {
  this.spinnerEl.classList.remove("spinner--visible");
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
