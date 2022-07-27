import React from 'react';
import { Hyperlink, Navlink } from '../styled-components/components/links';


export function Navbarlink(props) {
    return (
        <Navlink {...props} />
    )
}


const Routerlink = props => {
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

export default Routerlink;