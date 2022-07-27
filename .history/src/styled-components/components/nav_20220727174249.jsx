import styled from 'styled-components';
import { rem } from '../../Helpers/units';


export const Nav = styled.nav`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 100;
`;

export const Navlist = styled.ul`
    position: relative;
    width: 100%;
    height: auto;
    font-size: ${rem(32)};
    margin-block: auto;
    display: inline-flex;
    flex-direction: column;
    gap: ${rem(16)};
    z-index: inherit;
`;

export const Navitem = styled.li`
    position: relative;
    width: 100%;
    display: inherit;
    outline: 1px solid aqua;

`;