import React, { useState, useEffect } from 'react';
import NavigationTopBar from './Navigation/NavigationTopBar';
import Icons from './Icons/IconsContainer'
import LabelName from './LabelAndSwitch/LabelName';
import Switcher from './LabelAndSwitch/Switcher';
function Header() {
    return ( 
        <div className='flex justify-start items-center   '>
            <Switcher/>
            <NavigationTopBar/>
            <Icons/>
        </div>
     );
}

export default Header;