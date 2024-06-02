import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,

  fonts: {
    heading: `'Lobster'`,
    body: `'Nunito Variable', serif;`,

  },
});
