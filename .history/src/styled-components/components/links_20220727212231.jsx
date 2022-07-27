import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Hyperlink = styled(Link)`
    position: relative;
    color: inherit;
`;

export const Navlink = styled(Link)`
    position: relative;
    color: var(--lightpurple);
    filter: ${props => props.$active ? 'saturate(500%) drop-shadow(0px 0px 16px rgb(255, 0, 255,0.5))' : null};
    transition: filter 500ms ease-in-out;
`;