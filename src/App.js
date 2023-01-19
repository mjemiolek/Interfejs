import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./containers/Home";
import Games from "./containers/Games";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games" exact component={Games} />
          {/* <Route path="/product/:productId" component={} />
          <Route path="/cart" component={} />
          <Route path="/payment" component={} /> */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;