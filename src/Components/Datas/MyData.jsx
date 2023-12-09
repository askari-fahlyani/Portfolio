import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const navigationItems = [
    {
        tilte:'Home',
        id: '1',
        isActive:false,
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
]

export const MyIcons = [
    {
        title:'github',
        id:'1',
        relatedIcon:<FaGithub size={'30px'} color="blue" title={'github'} />
    },
    {
        title:'linkedin',
        id:'2',
        relatedIcon:<FaLinkedin size={'30px'} color="green" title={'linkedin'}  />
    },
]
