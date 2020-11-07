let biodataNaufal = document.querySelector("#biodataNaufal")
let url = "https://api.github.com/users/Nafachri"

let myBio = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

        let biodataGit = 
        `<div class="card bg-danger" style="width: 18rem;">
            <img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
                <div class="card-body bg-primary">
                    <h5 class="card-title">${data.login}</h5>
                    <p class="card-text">${data.login} is member of ${data.company} Group</p>
                    <a href="https://github.com/Nafachri" class="btn btn-success">Follow Me On Github!</a>
                </div>
        </div>`;

        biodataNaufal.innerHTML += biodataGit
}
    

myBio()