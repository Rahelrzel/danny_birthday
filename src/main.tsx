import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/lobster";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/nunito";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./config/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
