let bendera = document.querySelector("#bendera");
let url = "https://restcountries.eu/rest/v2/all";

const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    for(let i = 0; i <= 250; i++){
        let listBendera = `
        <div id="card-margin" class="col-12 col-lg-3">
                <div class="card h-100 bg-primary text-white">
                    <img class="card-img-top" src="${data[i].flag}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].name}</h5>
                            <p class="card-text">${data[i].name} region is ${data[i].region} and the capital of ${data[i].name} was ${data[i].capital}</p>
                        </div>
                </div>
            </div>
        `;
    
        bendera.innerHTML += listBendera
        
    }
};

getData();