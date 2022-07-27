import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const GridLayout = styled(Container)`
    display: grid;
`;


export const FlexLayout = styled(Container)`
    display: flex;
`;