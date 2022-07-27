import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Hyperlink = styled(Link)`
    position: relative;
    color: inherit;
`;

export const Navlink = styled(Link)`
    position: relative;
    color: var(--lighttorchred);
    filter: saturate(500%) drop-shadow(0px 0px 16px rgba(0px 0px 16px rgba(255, 0, 76,0.5)));
`;