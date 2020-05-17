import { message, messageDOM } from "./tools/message.js";
import "./components/footer";
import info from "./data/title.txt";
import "./sass/index.scss";
import addImage from "./tools/image";
import Creator from "./tools/creator";

message("działam po bandlingu!");
messageDOM(info);
addImage("h1");
const element1 = new Creator();
element1.addBgc("red");
const element2 = new Creator();
element2.addBgc("blue");
const element3 = new Creator();
element3.addBgc();
element3.showColor();
