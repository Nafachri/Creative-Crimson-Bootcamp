import logo from './logo.svg';
import './App.css';
import React from 'react';
import FunctionComponent from './components/FunctionComponent'
import KelasKomponen from './components/ClassComponent';



function App(){
  return(
    <>
      <div className="bungkus">
        <div className="component1">
          <h2>Function Component</h2>
        <FunctionComponent />
        </div>
        <div className="component2">
        <h2>Class Component</h2>
        <KelasKomponen />
        </div>
      </div>
    </>
  )
}


export default App;

//import React from 'react'
//membuat function component countingnum
//membuat state 
//membuat method tambah dan kurang
//di dalam aplikasi ingin membuat 2 buah tombol yaitu + dan -
//dan juga parameter angka yang apabila di tambah dia bertambah , dan di kurang dia berkurang
//apabila tombol + di click maka angka akan bertambah 1 
//apabila tombol - di click maka angka akan berkurang 1 dan apabila sudah sampai 0 maka stop.
