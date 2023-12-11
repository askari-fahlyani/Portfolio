import React, { useState, useEffect,useContext } from 'react';
// import { navigationItems } from '../../../Datas/MyData'
import NavigationItem from './NavigationItem';
import HeaderContext from '../../../Context/HeaderContext';
function NavigationTopBar() {
    const {navigationItems,setNanigationItems,} = useContext(HeaderContext)
    useEffect(() => {
        console.log("navigationItems", JSON.stringify(navigationItems, null, 2));
      }, [navigationItems]);
      
    return ( <div className='flex justify  '>
       {navigationItems.map((nav)=><NavigationItem title={nav.tilte} id={nav.id} isActive={nav.isActive} defaultActive={nav.defaultActive} key={nav.id}/>)}
    </div>);
}

export default NavigationTopBar;