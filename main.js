function getAllUsers() {
    let users = document.querySelector(".users")
    let requestUsers = new XMLHttpRequest()
    requestUsers.open("GET", "https://jsonplaceholder.typicode.com/users")
    requestUsers.responseType = "json"
    requestUsers.send()

    requestUsers.onload = function () {
        if (requestUsers.status >= 200 && requestUsers.status < 300) {
            for (i in requestUsers.response) {
                let user = document.createElement("div")
                user.className = "user"
                user.setAttribute("onclick",`userClick(${requestUsers.response[i]["id"]},this)`)
                let userName = document.createElement("h3")
                userName.innerHTML = requestUsers.response[i]["name"]
                let userEmail = document.createElement("p")
                userEmail.innerHTML = requestUsers.response[i]["email"]
                user.appendChild(userName)
                user.appendChild(userEmail)
                users.appendChild(user)
            }
        }
    }
}

getAllUsers()

function getAllPosts(userId) {
    let posts = document.querySelector(".posts") 
    let requestPosts = new XMLHttpRequest() 
    requestPosts.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`) 
    requestPosts.responseType = "json" 
    requestPosts.send() 
    posts.innerHTML = ""
    requestPosts.onload = function () {
        if (requestPosts.status >= 200 && requestPosts.status < 300) {
            for (i in requestPosts.response) {
                let post = document.createElement("div")
                post.className = "post"
                let postTitle = document.createElement("h3")
                postTitle.innerHTML = requestPosts.response[i]["title"]
                let hr = document.createElement("hr")
                let postBody = document.createElement("p")
                postBody.innerHTML = requestPosts.response[i]["body"]
                post.appendChild(postTitle)
                post.appendChild(hr)
                post.appendChild(postBody)
                posts.appendChild(post)
            }
        }
    }
}

getAllPosts(1)

function userClick(id,e) {
    getAllPosts(id)
    let active = document.getElementsByClassName("user")
    for (i of active) {
        i.classList.remove("active")
    }
    e.classList.add("active")
}