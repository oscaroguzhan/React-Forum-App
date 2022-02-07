import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import CardDetails from "./components/pages/CardDetails";
import HomePage from "./components/pages/HomePage";
import GlobalStyles from "./components/styles/GlobalStyles";

// theme setup for colors
const theme = {
  colors: {
    header: {
      bg: "#fafafa",
    },
    body: {
      bg: "#695cfe",

      homepage: {
        white: "#fff",
        black: "#000",
      },
      card: {
        bg: "#ebf5fc",
      },
    },
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route
            path="/post/:id"
            render={(props) => <CardDetails {...props} />}
          />
        </Switch>
      </>
    </ThemeProvider>
  );
}

export default App;
