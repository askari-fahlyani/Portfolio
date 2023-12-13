import React, { useState, useContext } from 'react';
import Icon from './Icon';
import HeaderContext from '../../../Context/HeaderContext';
import { iconData } from '../../../Datas/MyData';

function Icons() {
    const [myIcons, setMyIcons] = useState(iconData); // Corrected this line
    const { darkMode } = useContext(HeaderContext);

    return (
        <div className='flex w-[30%] justify-end'>
            {myIcons.map(({ id, title, icon: IconComponent }) => (
                <IconComponent
                    key={id}
                    size={'30px'} 
                    color={darkMode ? '#8997b1' : undefined} 
                    title={title} 
                />
            ))}
        </div>
    );
}

export default Icons;