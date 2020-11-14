import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './ClassComponent.css'

class KelasKomponen extends Component{
    constructor(){
      super()
      this.state = {
        count: 0
      }
    }
    
      // state = {count: 0}
    
      tambah(){
      this.setState({
          count: this.state.count + 1
      })
      }
    
      kurang(){
        if(this.state.count === 0){
        }else{
          this.setState({
              count: this.state.count - 1
        })
        }
    
      }
    render(){
      return(
        <>
        <h1 className="paragrafClass">{this.state.count}</h1>
        <div className="button1">
            <Button variant="btn btn-danger" onClick={() => this.kurang()}>-</Button>
            <Button variant="btn btn-success" onClick={() => this.tambah()}>+</Button>
        </div>
        </>
      )
    }
}

export default KelasKomponen;