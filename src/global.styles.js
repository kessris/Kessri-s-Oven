import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Baskerville Old Face';
    padding: 20px 60px;
    overflow-y: scroll;
    
    @media screen and (max-width: 500px) {
        padding: 0;
        justify-content: center;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}
`;