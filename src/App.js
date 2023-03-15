import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles, lightTheme, darkTheme } from "./app/theme";
import { ThemeProvider } from "styled-components";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
