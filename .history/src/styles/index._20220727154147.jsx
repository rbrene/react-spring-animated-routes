import styled, { createGlobalStyle } from 'styled-components';
import { em, rem } from '../helpers/units';


const Root = styled.createGlobalStyle`
:root {
    --primary: #000;
    --primaryAccent: #fff;
    --accent: #f04;
}

html {
    font-size: 100%;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
}

body {
    font-size: ${rem(16)};
    font-family: 'Poppins', sans-serif;
}

#root {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
}
`;

export default Root;