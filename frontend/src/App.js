import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Menu, Home,Topics} from './component/Home'
import Header from './component/Header'
import {About} from './component/About'
import './App.css'
function App() {
  return (
    <Router basename="react">
      <div>
        <div className="header"><Header/></div>
        <div  className="menu"><Menu /></div>
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
      </div>
    </Router>
  );
}
export default App;
