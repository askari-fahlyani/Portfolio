import React, { useState, Children } from "react";
import HeaderContext from "./HeaderContext";

function HeaderProvider({ children }) {
  const [isHovered, setIsHovered] = useState(false);
   const [navigationItems,setNavigationItems] =useState([
    {
        tilte:'Home',
        id: '1',
        isActive:true,
        defaultActive:false
    },
    {
        tilte:'About',
        id: '2',
        isActive:false,
        defaultActive:false
    },
    {
        tilte:'What I Do',
        id: '3',
        isActive:false,
        defaultActive:false
    },
    {
        tilte:'Resume',
        id: '4',
        isActive:false,
        defaultActive:false
    },
    {
        tilte:'Portfolio',
        id: '5',
        isActive:false,
        defaultActive:false
    },
    {
        tilte:'Client',
        id: '6',
        isActive:false,
        defaultActive:false
    },
    {
        tilte:'Contact',
        id: '7',
        isActive:false,
        defaultActive:false
    }
]) 
const handleItemsClick = (itemId)=>{
    setNavigationItems((navigationItems)=>
        navigationItems.map((item)=>item.id===itemId?{...item,isActive:true}:{...item,isActive:false})
    )
}
  return ( 
    <HeaderContext.Provider value={{ isHovered, setIsHovered,navigationItems,setNavigationItems,handleItemsClick }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
