import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Gentium Book Plus', serif;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    /* background-color: black;
    color: white; */
    /* font-family: 'Gentium Book Plus', serif; */
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
};

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  nav: "rgb(42, 48, 56)",
};
