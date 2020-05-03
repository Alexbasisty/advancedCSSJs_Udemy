const addForm = document.querySelector(".form--add");

const addElement = (event, node, txt, attr, value) => {
    event.preventDefault();
    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    element.appendChild(text);
    element.setAttribute(attr, value);
    document.body.appendChild(element);
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
