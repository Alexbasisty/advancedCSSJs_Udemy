import { message, messageDOM } from "./tools/message.js";
import "./components/footer";
import info from "./data/title.txt";
import "./sass/index.scss";
import addImage from "./tools/image";

message("działam po bandlingu!");
messageDOM(info);
addImage("h1");
