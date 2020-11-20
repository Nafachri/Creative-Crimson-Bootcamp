import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minusAction, plusAction } from '../action'

function Counter () {
    const dispatch = useDispatch()
    const countSelector = useSelector((state) => state.count)

    return(
        <div>
            <button onClick={() => dispatch(minusAction())}>-</button>
            <span>{countSelector}</span>
            <button onClick={() => dispatch(plusAction())}>+</button>
        </div>
    )
}
export default Counter;

