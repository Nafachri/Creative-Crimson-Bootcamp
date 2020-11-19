import React, { useEffect, useState } from 'react'

function Digimon() {
    const [Digimons, setDigimons]=useState([])

    useEffect( async () => { 
        const response = await fetch("https://digimon-api.vercel.app/api/digimon")
        const data = await response.json()
        setDigimons(data);
    })

    return(
        <>
        {Digimons.map((item)=> <div><p>{item.name} = {item.level}</p><img src={item.img}></img></div>)}
        </>
    )
}

export default Digimon;