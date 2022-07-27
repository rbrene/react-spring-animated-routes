import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const GridContainer = styled(Container)`
    display: grid;
`;


export const FlexContainer = styled(Container)`
    display: flex;
`;