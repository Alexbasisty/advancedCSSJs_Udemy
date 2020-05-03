const addForm = document.querySelector(".form--add");

const addElement = (event, node, txt, attr, value) => {
    event.preventDefault();
    const element = document.createElement(node);
    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector(".content").appendChild(element);
};

addForm.addEventListener("submit", (e) =>
    addElement(
        e,
        addForm.elements.node.value,
        addForm.elements.text.value,
        addForm.elements.attr.value,
        addForm.elements.value.value
    )
);
