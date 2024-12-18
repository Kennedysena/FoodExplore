import { StrictMode } from "react";
import { createRoot } from "react-dom/client";;
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { Dish } from "./pages/Dish";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dish />
    </ThemeProvider>
  </StrictMode>,
);
