const values = [
    {
        name: "Ananas",
        calories: 33,
        fat: 0,
        carbs: 11.8,
    },
    {
        name: "Jabłko",
        calories: 57,
        fat: 0.7,
        carbs: 12.1,
    },
    {
        name: "Pomarańcza",
        calories: 51,
        fat: 0.2,
        carbs: 11.3,
    },
    {
        name: "Wiśnia",
        calories: 67,
        fat: 0.4,
        carbs: 14.6,
    },
];

const valuesContainer = document.querySelector(".app--values");

const desktopViewport = window.matchMedia("screen and (min-width: 500px)");

const drawDesktopValues = () => {
    valuesContainer.innerHTML = "";
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    thead.innerHTML =
        "<tr><th>Nazwa</th><th>Kalories</th><th>Tłuszcz</th><th>Węgłowodany</th></tr>";
    let tbody = document.createElement("tbody");

    values.forEach((value) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    valuesContainer.appendChild(table);
};

drawDesktopValues();
