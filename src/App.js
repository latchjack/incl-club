import React from 'react';
import 'bulma'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
