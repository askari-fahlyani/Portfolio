import React, { useState, useEffect,useContext } from 'react';
import HeaderContext from '../../../Context/HeaderContext';
 function NavigationItem({title,isActive,id}) {
    const {navigationItems,setNanigationItems,handleItemsClick} = useContext(HeaderContext)
   const handleClick= ()=>{

       handleItemsClick(id)
}

    
    return ( 
        <div onClick={handleClick}  className={isActive?'w-[80px] h-[40px]  flex justify-center m-[8px] bg-[green] ':'w-[80px] h-[40px]  flex justify-center m-[8px]  '}>
            {title}
        </div>
     );
 }
 
 export default NavigationItem;