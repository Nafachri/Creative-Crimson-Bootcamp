import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

function CountingNum (){

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
    <p>{count}</p>
    <button onClick={kurang}>-</button>
    <button onClick={tambah}>+</button>
    </>
  )
}

export default CountingNum;

//import React from 'react'
//membuat function component countingnum
//membuat state 
//membuat method tambah dan kurang
//di dalam aplikasi ingin membuat 2 buah tombol yaitu + dan -
//dan juga parameter angka yang apabila di tambah dia bertambah , dan di kurang dia berkurang
//apabila tombol + di click maka angka akan bertambah 1 
//apabila tombol - di click maka angka akan berkurang 1 dan apabila sudah sampai 0 maka stop.
