import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './FunctionComponent.css'

function FunctionComponent() {

  const [count, setCount] = useState(0)

  function tambah(){
    setCount(count + 1)
  }

  function kurang(){
    if(count === 0){

    }else{
      setCount(count - 1)
    }
  }

  return(
    <>
        <h1 className="paragrafFunction">{count}</h1>
        <div className="button2">
            <Button variant="btn btn-warning" onClick={kurang}>-</Button>
            <Button variant="btn btn-secondary" onClick={tambah}>+</Button>
        </div>
    
    </>
  )
}

export default FunctionComponent;