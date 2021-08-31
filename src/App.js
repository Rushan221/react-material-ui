import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNotes from "./pages/CreateNotes";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import SalesList from "./pages/Sales/SalesList";
import CreateSales from "./pages/Sales/CreateSales";
import Signup from "./components/auth/Signup";

//create theme
const theme = createTheme({
  palette: {
    secondary: purple,
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/sign-up" component={Signup} />
        <Layout>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/notes" component={Notes} />
            <Route path="/create-notes" component={CreateNotes} />
            <Route path="/sales" component={SalesList} />
            <Route path="/create-sales" component={CreateSales} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
