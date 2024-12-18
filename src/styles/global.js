import { createGlobalStyle } from "styled-components";

// import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
        
    }

:root {
    font-size: 62.5%;
}

body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    --swiper-navigation-size: 4rem;
    --swiper-theme-color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

body, input, textarea, button {
    outline: none; 
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
}

button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

a{
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s; ;
}

button:hover, a:hover {
    filter: brightness(0.9);
}


`;
