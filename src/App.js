import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, dividerClasses } from "@mui/material";
import Topbar from './scenes/global/Topbar';

function App() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContent.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContent.Provider>
  );
}

export default App;
