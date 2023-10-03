import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppContext, AppProps } from "next/app";
import { darkTheme } from "../themes";

import "../styles/globals.css";

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  console.log(rest);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { theme } = appContext.ctx.req
    ? (appContext.ctx.req as any).cookies
    : { theme: "light" };

  const validThemes = ["light", "custom", "dark"];

  return {
    theme: validThemes.includes(theme) ? theme : "dark",
  };
};

export default MyApp;
