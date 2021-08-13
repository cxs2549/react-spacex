import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: none;
        color: currentColor;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* color: #333; */
    }

    svg, a, button {
        cursor: pointer;
    }

    svg {
        font-size: 1.35rem;
    }
`

export default GlobalStyles