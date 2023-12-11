import React, { useState, useEffect, useContext } from 'react';
import HeaderContext from '../../../Context/HeaderContext';
function Icon({title,id,relatedIcon}) {

    return ( 
        <div  className='m-[8px] '>
            {relatedIcon}
        </div>
     );
}

export default Icon;