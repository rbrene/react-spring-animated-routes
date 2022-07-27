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

* {
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: ${em(14)};
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(223, 223, 223, 0.502);
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        display: block;
        border-radius: ${rem(50)};
    }
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
    font-weight: 400;
    color: var(--primary);
}

#root {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
}

ul,
ol,
li {
    list-style: none;
}

a,
a:visited,
a:active {
    text-decoration: none;
}

input,
textarea,
button,
select {
    font-family: inherit;
}

img,
picture,
figure {
    max-width: 100%;
    height: auto;
    object-fit: contain;
}
`;

export default Root;


export const Main = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
    user-select: none;
`;