let namaBuah = [
    {
        linkGambar :"https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        namaBuah : "Semangka",
        warna : "Merah",
        rasa : "Manis dan mengandung banyak air"
    },
    {
        linkGambar :"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1409&q=80",
        namaBuah : "Pisang",
        warna : "Kuning",
        rasa : "Manis"
    },
    {
        linkGambar :"https://images.unsplash.com/photo-1547939128-a2e74924b249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1324&q=80",
        namaBuah : "Jeruk",
        warna : "Oren",
        rasa : "Ada manis dan Ada asam"
    }     
]

let hasilBuah = document.getElementById("buahBuahan")

    hasilBuah.innerHTML = namaBuah.map((value) => {
        return `
        <div class="card">
            <img class="card-img-top" src="${value.linkGambar}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${value.namaBuah}</h5>
                    <p class="card-text">${value.rasa}</p>
                </div>
        </div>`
    })