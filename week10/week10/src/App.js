import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, link} from "react-router-dom";

//routes
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

const NewRoute = () => {
  return(
    <div>
      <p>New Route</p>
    </div>
  )
}

const Home = () => {
  return(
    <div>
      <p>Home</p>
    </div>
  )
}





class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div>
            {Navigation}
         <Route>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/student/:studentname/:studentno?" component={Student} />
              <Route component={Error} />
            </Switch>
         </Route>
        </div>

     </BrowserRouter>
    );
  }
}

export default App;
