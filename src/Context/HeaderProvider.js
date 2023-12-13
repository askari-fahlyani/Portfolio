import React, { useState, Children, useEffect } from "react";
import HeaderContext from "./HeaderContext";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HeaderProvider({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ darkMode,setDarkMode] = useState(false)
  const [iconColor,setIconColor] = useState('')
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
const [MyIcons,setMyIcons] = useState([
    {
        title:'github',
        id:'1',
        relatedIcon:darkMode?<FaGithub size={'30px'} color={'red'} title={'github'} />:<FaGithub size={'30px'}  title={'github'} />
    },
    {
        title:'linkedin',
        id:'2',
        relatedIcon:darkMode?<FaLinkedin size={'30px'} color={'red'} title={'github'} />:<FaLinkedin size={'30px'}  title={'github'} />
    },
]) 
// useEffect(() => {
//     // Dynamically generate icons based on darkMode
//     const updatedIcons = MyIcons.map(icon => ({
//         ...icon,
//         relatedIcon: (
//             <icon.rela
//                 size={'30px'} 
//                 color={darkMode ? "#8997b1" : ''} 
//                 title={icon.title} 
//             />
//         )
//     }));
//     setMyIcons(updatedIcons);
// }, [darkMode]); // Re-run effect when darkMode changes
const handleItemsClick = (itemId)=>{
    setNavigationItems((navigationItems)=>
        navigationItems.map((item)=>item.id===itemId?{...item,isActive:true}:{...item,isActive:false})
    )
}
useEffect(()=>{
console.log('darkMode is:',darkMode);
},[darkMode])
  return ( 
    <HeaderContext.Provider value={{ isHovered, setIsHovered,navigationItems,setNavigationItems,handleItemsClick,darkMode,setDarkMode,MyIcons,setMyIcons,iconColor,setIconColor }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default HeaderProvider;
