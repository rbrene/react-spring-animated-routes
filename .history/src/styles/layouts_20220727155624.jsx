import styled from 'styled-components';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Grid = styled(Container)`
    display: ${props => props.$inline ? 'inline-grid' : 'grid'};
`;


export const Flex = styled(Container)`
    display: ${props => props.$inline ? 'inline-flex' : 'flex'};
`;