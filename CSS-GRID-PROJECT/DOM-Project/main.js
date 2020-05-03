const addForm = document.querySelector(".form--add");

const addElement = (
    event,
    node = "div",
    txt = "text",
    attr = "style",
    value = 'font-size = "20px"'
) => {
    event.preventDefault();
    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    element.appendChild(text);
    document.body.appendChild(element);
};

addForm.addEventListener("submit", addElement);
