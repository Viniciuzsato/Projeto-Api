const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "Post",
        body: JSON.stringify(newUser),
        headers: {
            "content-type" : "application/json; charset=UTF-8"
        }
    })
    .then(response => response.JSON())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Vinicius Sato",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo"
}

// addUser(newUser)

getUsers()
getUser()