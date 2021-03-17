import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useContext } from "react";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const { thema } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={thema ? darkTheme : null}>
      <ResponsiveDrawer />
    </ThemeProvider>
  );
}

export default App;
