import styled from 'styled-components';
import { rem, em } from '../../Helpers/units';


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
    font-size: clamp(${rem(24)}, 4vw, ${rem(32)});
    margin-block: auto;
    display: inline-flex;
    flex-direction: column;
    gap: ${rem(8)};
    z-index: inherit;
`;

export const Navitem = styled.li`
    position: relative;
    width: 100%;
    height: ${em(40)};
    display: flex;
    align-items: center;
    justify-content: center;
`;