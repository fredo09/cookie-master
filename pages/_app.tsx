import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme, customTheme } from "../themes";
import Cookies from "js-cookie";

import "../styles/globals.css";

//Extendemos las props para agregar nuevas
interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme }: Props) {
  const [currentThemes, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";

    const selectedTheme =
      cookieTheme === "light"
        ? lightTheme
        : cookieTheme === "dark"
        ? darkTheme
        : customTheme;

    //seteamos el state
    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentThemes}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: "light" };

//   const validThemes = ["light", "custom", "dark"];

//   return {
//     theme: validThemes.includes(theme) ? theme : "dark",
//   };
// };

export default MyApp;
