import styled from 'styled-components';
import { em } from '../../Helpers/units';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Sidebar = styled.aside`
    position: relative;
    width: ${em(96)};
    height: 100%;
    z-index: 99;
    background: var(--primary);
`;
