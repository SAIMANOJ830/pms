import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home ';
import Tenants from './pages/Tenants ';
import Maintenance from './pages/Maintenance ';
import Header from './components/Header ';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Tenants" component={Tenants} />
        <Route path="/Maintenance" component={Maintenance} />
      </Switch>
    </Router>
  );
}

export default App;
