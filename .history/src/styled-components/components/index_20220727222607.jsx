import styled from 'styled-components';
import { rem, em } from '../../Helpers/units';
import { animated as a } from '@react-spring/web';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Sidebar = styled(a.aside)`
    position: relative;
    width: clamp(${em(64)}, 8vw, ${em(96)});
    height: 100%;
    font-size: ${rem(16)};
    z-index: 99;
    background: var(--primary);
`;


export const Section = styled(a.section)`
    grid-column: 2;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
`;