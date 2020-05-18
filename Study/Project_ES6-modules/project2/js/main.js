import { showInConsole, showInDOM } from "./components/show.js";
import product from "./components/product.js";

const { name, price, age } = product;

showInConsole(name);
showInDOM(price, "h3");
showInDOM(age);
