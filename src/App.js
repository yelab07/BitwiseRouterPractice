import './App.css';
import React, {useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './Pages/About';
import Nav from './Components/Navbar/Nav';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Movies from './Pages/Movies';

function App() {
  const [movieData, setMovieData] = useState({});
   useEffect(() => {
     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7527a9f7")
       .then((res) => res.json())
       .then((data) => setMovieData(data));
     // console.log("hello about ");
     // return () => {fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=7527a9f7`); }
   }, []);
    // console.log(movieData);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          {/* <Route exact path="/"><Home />
          </Route> */}
          <Route exact path="/">
            <Movies movieData={movieData} />
          </Route>
          <Route path="/">404 site not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
