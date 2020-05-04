const getUsers = (e) => {
    e.preventDefault();

    const usersNumber = document.querySelector('[name = "users-number"]').value;
    const usersGender = document.querySelector('[name = "gender"]').value;

    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
        usersGender === "both" ? "male,female" : usersGender
    }`;

    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error("To nie jest odpowiedź 200");
            } else {
                return response.json();
            }
        })
        .then((json) => showUsers(json.results))
        .catch((err) => console.log(`Error: ${err}`));
};

const showUsers = (users) => {
    const resultArea = document.querySelector(".users-list");
    resultArea.textContent = "";
    users.forEach((user) => {
        const item = document.createElement("div");
        item.className = "user";
        item.innerHTML = `
        <div class="user__name">${user.name.title.toUpperCase()} ${
            user.name.first
        } ${user.name.last.toUpperCase()}</div>
        <img src=${user.picture.medium} alt="user-photo" class="user__image">
        `;
        resultArea.appendChild(item);
    });
};

document.querySelector(".generator").addEventListener("submit", getUsers);
