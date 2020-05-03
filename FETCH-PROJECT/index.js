const getUsers = () => {
    const url = "https://randomuser.me/api/?results=10";
    fetch(url)
        .then((response) => console.log(response))
        .catch((err) => console.log(`Error: ${err}`));
};

document.querySelector("button").addEventListener("click", getUsers);
