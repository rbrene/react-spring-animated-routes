import styled from 'styled-components';
import { Container } from '../components/index';


const GridLayout = styled(Container)`
    display: grid;
`;

export const FlexLayout = styled(Container)`
    display: flex;
`;


export const AppLayout = styled(GridLayout)`
    grid-template-columns: auto 1fr;
    overflow: inherit;
`;

export const AppNavbarColumn = styled(Container)`
    grid-column: 1;
`;

export const AppRoutesColumn = styled(Container)`
    grid-column: 2;
    overflow-y: auto;
    overflow-x: hidden;
`;