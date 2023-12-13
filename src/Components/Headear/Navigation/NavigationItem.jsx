import React, { useState, useEffect,useContext } from 'react';
import HeaderContext from '../../../Context/HeaderContext';
 function NavigationItem({title,isActive,id}) {
    const {navigationItems,setNanigationItems,handleItemsClick,darkMode} = useContext(HeaderContext)
    const [iemClassName,setItemClassName] = useState('')

    const itemClassNameHandler = (itemActive,darkMode)=>{
        if(itemActive&&!darkMode){
            setItemClassName('w-[80px] h-[40px] border-b-2 border-[#8997b1]  flex justify-center items-center  m-[8px] font-bold  ')
        }else if(!itemActive&&!darkMode){
            setItemClassName('w-[80px] h-[40px]  flex justify-center m-[8px] items-center font-medium cursor-pointer')
        } else if(itemActive&&darkMode){
            setItemClassName('w-[80px] h-[40px] border-b-2 border-[red]  flex justify-center items-center  m-[8px] font-bold text-[#8997b1]')
        }else{
            setItemClassName('w-[80px] h-[40px]  flex justify-center m-[8px] items-center font-medium cursor-pointer text-[#8997b1]')
        }

    }
    useEffect(()=>{
        itemClassNameHandler(isActive,darkMode)
    },[isActive,darkMode])
   const handleClick= ()=>{

       handleItemsClick(id)
}

    
    return ( 
        <div onClick={handleClick}  className={iemClassName}>
            {title}
        </div>
     );
 }
 
 export default NavigationItem;