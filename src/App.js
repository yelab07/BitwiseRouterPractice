import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './Pages/About';
import Nav from './Components/Navbar/Nav';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contacts"><Contacts/></Route>
          <Route exact path="/"><Home />
          </Route>
          <Route path="/">404 site not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
