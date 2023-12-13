import React, { useState, useEffect, useContext } from 'react';
import HeaderContext from '../../../Context/HeaderContext';
function Icon({title,id,relatedIcon}) {
const{darkMode,setIconColor,iconColor} = useContext(HeaderContext)
const iconColorhandler = (bool)=>{
    if (bool){
        setIconColor('#8997b1')
    }else{
        setIconColor('')
    }
}
useEffect(()=>{
iconColorhandler(darkMode)
console.log(iconColor);
},[darkMode])
    return ( 
        <div  className='m-[8px] flex items-center cursor-pointer'>
            {relatedIcon}
        </div>
     );
}

export default Icon;