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

    infoElement.textContent = "";
    const elements = document.querySelectorAll(element);
    if (elements.length > 0) {
        infoElement.innerHTML = `<p class="result__info">W tym dokumencie znalazłem <strong>${elements.length}</strong> elementów <strong>${element}</strong></p>`;
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result__info">W tym dokumencie nie znalazłem elementów <strong>${element}</strong></p>`;
        return;
    }
};

const showInfo = (elements, infoElement) => {
    elements.forEach((el) => {
        const item = document.createElement("div");
        item.className = "element-info";
        item.innerHTML = `
        <div>${el.nodeName}</div>
        <div>klasa/klasy: ${el.className}</div>
        <div>Wysokość elementu(offsetHeight): ${el.offsetHeight}</div>
        <div>Szerokość elementu(offsetWidth): ${el.offsetWidth}</div>
        <div>Odległość od lewej krawędzi (offsetLeft): ${el.offsetLeft}</div>
        <div>Odległość od górnej krawędzi (offsetTop): ${el.offsetTop}</div>
        <div>Liczba elementów dzieci(childElementCount): ${el.childElementCount}</div>
        `;
        infoElement.appendChild(item);
    });
};

searchForm.addEventListener("submit", (e) =>
    searchElements(event, searchForm.elements["searching-element"].value)
);
