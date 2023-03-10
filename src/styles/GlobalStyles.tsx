import { createGlobalStyle } from 'styled-components';
import { lightGray } from '../configs/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%; // 1rem = 10px

  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    font-family: 'Montserrat', sans-serif;
    font-family: sans-serif;
    font-weight: 400;
    background: ${lightGray};

  }


  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
`;
