import React, { useState, useEffect, useContext } from 'react';
import HeaderContext from '../../../Context/HeaderContext';

function Switcher() {
    const {darkMode,setDarkMode} = useContext(HeaderContext)
    const modeHandler = ()=>{
        setDarkMode(!darkMode)
    }
    useEffect(()=>{
    console.log(darkMode);                         
    },[darkMode])
    return (
      <button className={!darkMode?'w-[30%]  flex items-center font-bold  ':'w-[30%]  flex items-center font-bold text-[#8997b1] '}  onClick={modeHandler}>
        {darkMode?'Light Mode':'Dark Mode'}
      </button>
    );
}

export default Switcher;