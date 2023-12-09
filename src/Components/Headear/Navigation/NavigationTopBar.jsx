import React, { useState, useEffect } from 'react';
import { navigationItems } from '../../Datas/MyData'
import NavigationItem from './NavigationItem';
function NavigationTopBar() {
    return ( <div className='flex justify  '>
       {navigationItems.map((nav)=><NavigationItem title={nav.tilte} id={nav.id} isActive={nav.isActive} defaultActive={nav.defaultActive} key={nav.id}/>)}
    </div>);
}

export default NavigationTopBar;