import photo from "../images/fit.jpeg";

export default (tag) => {
    const img = document.createElement("img");
    img.src = photo;
    document.querySelector(tag).appendChild(img);
};
