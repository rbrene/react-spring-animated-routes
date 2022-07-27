import { RiHomeFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { faHome, faUser, faDiagramProject, faComment } from '@fortawesome/free-solid-svg-icons';


export const data = {
    navbar: [{
            id: 1,
            path: '/',
            name: 'home',
            icon: faHome
        },
        {
            id: 2,
            path: '/about',
            name: 'about',
            icon: faUser
        },
        {
            id: 3,
            path: '/portfolio',
            name: 'portfolio',
            icon: faDiagramProject
        },
        {
            id: 4,
            path: '/contact',
            name: 'contact',
            icon: faComment
        }
    ],
    hero: {
        sub: 'Welcome. My name is,',
        main: 'Raees Brene',
        paragraph: 'I\'m a developer from Cape Town. I build solutions that looks good on the web, and I love to code. '
    }
}