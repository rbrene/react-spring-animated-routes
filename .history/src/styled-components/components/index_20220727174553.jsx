import styled from 'styled-components';
import { rem, em } from '../../Helpers/units';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Sidebar = styled.aside`
    position: relative;
    width: clamp(${em(64)}, 10vw, ${em(96)});
    height: 100%;
    font-size: ${rem(16)};
    z-index: 99;
    background: var(--primary);
`;
