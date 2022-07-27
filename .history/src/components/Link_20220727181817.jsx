import React from 'react';
import { Hyperlink, Navlink } from '../styled-components/components/links';


export default function Navbarlink(props) {
    return (
        <Navlink {...props} />
    )
}


export const RouterLink = props => {
    const { variant } = props;

    switch (variant) {
        case 'nav':
            return <Navbarlink {...props} />
        case 'hyperlink':
            return <Hyperlink {...props}/>
        default:
            return console.error('no variant specified')
    }

}