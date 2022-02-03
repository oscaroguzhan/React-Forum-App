import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/GlobalStyles";

// colors theme setup
const theme = {
  colors: {
    header: {
      bg: "#fafafa",
    },
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}

export default App;
