import React from 'react';
import { useLocation } from 'react-router-dom';
import { Hyperlink, Navlink } from '../styled-components/components/links';


export function Navbarlink(props) {
    const location = useLocation();
    const active = location.pathname === props.to;

    if (active !== true) {
        return <Navlink {...props} />;
    }
    else {
        return <Navlink {...props} $active="true" />;
    }
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