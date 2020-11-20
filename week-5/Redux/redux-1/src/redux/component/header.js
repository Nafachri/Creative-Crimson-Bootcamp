import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

    const countSelector = useSelector((state) => StaticRange.counterReducer)
    
    return(
        <div>
            <h1>{countSelector}</h1>
        </div>
    )
}

export default Header;