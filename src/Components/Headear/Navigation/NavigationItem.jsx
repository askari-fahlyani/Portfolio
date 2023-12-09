import React, { useState, useEffect } from 'react';
 function NavigationItem({title}) {
    return ( 
        <div className='w-[80px] h-[40px]  flex justify-center m-[8px] '>
            {title}
        </div>
     );
 }
 
 export default NavigationItem;