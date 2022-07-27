import styled from 'styled-components';
import { rem, em } from '../../Helpers/units';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Sidebar = styled.aside`
    grid-column: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: clamp(${em(64)}, 8vw, ${em(96)});
    height: 100%;
    font-size: ${rem(16)};
    z-index: 99;
    background: var(--primary);
`;

export const Section = styled.section`
    grid-column: 2;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
`;