import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/DMcontext";

function MyApp({ Component, pageProps }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
