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

const searchForm = document.querySelector(".form--search");

const searchElements = (e, element) => {
    e.preventDefault();
    const infoElement = document.querySelector(".result");
    const elements = document.querySelectorAll(element);
    if (elements.length > 0) {
        infoElement.innerHTML = `<p class="result__info">W tym dokumencie znalazłem <strong>${elements.length}</strong> elementów <strong>${element}</strong></p>`;
        showInfo();
    } else {
        infoElement.innerHTML = `<p class="result__info">W tym dokumencie nie znalazłem elementów <strong>${element}</strong></p>`;
        return;
    }
};

const showInfo = () => {
    console.log("hello");
};

searchForm.addEventListener("submit", (e) =>
    searchElements(event, searchForm.elements["searching-element"].value)
);
