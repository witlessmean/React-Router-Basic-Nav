import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    {/* <Navigation />
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/> */}
     {/*this is basically doing the same thing as the old way */}

     <Navigation />
    <Route exact path="/">
    <Home/> </Route>
    <Route exact path="/about">
    <About/> </Route>
    <Route exact path="/contact">
    <Contact/> </Route>
  </div>
);

export default App;

