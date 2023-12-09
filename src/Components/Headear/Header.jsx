import React, { useState, useEffect } from 'react';
import NavigationTopBar from './Navigation/NavigationTopBar';
import Icons from './Icons/IconsContainer'
import LabelName from './LabelName/LabelName';
function Header() {
    return ( 
        <div className='flex justify-start   '>
            <LabelName/>
            <NavigationTopBar/>
            <Icons/>
        </div>
     );
}

export default Header;