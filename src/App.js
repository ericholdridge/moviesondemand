import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MovieState } from './components/Context/MovieContext';
import Hero from './components/Hero/Hero';
import LeftSide from "./components/LeftNavigation/LeftSide";
import Popular from "./components/Popular/Popular";
import "./App.css";

const App = () => {
  return (
    <Router>
      <MovieState>
        <div className="App">
          <LeftSide />
          <Route exact path="/" component={Hero} />
          <Route path="/popular" component={Popular} />
        </div>
      </MovieState>
    </Router>
  );
}

export default App;