import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Hyperlink = styled(Link)`
    position: relative;
    color: inherit;
`;

export const Navlink = styled(Link)`
    position: relative;
    color: var(--lighttorchred);
    filter: ${props => props.active ? 'saturate(500%) drop-shadow(0px 0px 16px #ff004c)' : null};
`;