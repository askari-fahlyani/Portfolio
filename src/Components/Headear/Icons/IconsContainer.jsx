import React, { useState, useEffect } from 'react';
import {MyIcons} from '../../Datas/MyData'
import { FaGithub } from "react-icons/fa";
import Icon from './Icon';
function Icons() {
    return ( 
        <div className='flex w-[30%] justify-end '
        
        >
            {MyIcons.map((item)=><Icon title={item.title} key={item.id} id={item.id} relatedIcon={item.relatedIcon} />)}
        </div>
     );
}

export default Icons;