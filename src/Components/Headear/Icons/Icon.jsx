import React, { useState, useEffect } from 'react';
function Icon({title,id,relatedIcon}) {
    const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = ()=>{
setIsHovered(true)
}
const handleMouseLeave = ()=>{
setIsHovered(false)
}
    return ( 
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='m-[8px] '>
            {relatedIcon}
        </div>
     );
}

export default Icon;