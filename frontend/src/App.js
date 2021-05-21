import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Menu} from './component/Home'
import { Home} from './component/Home'
import List from './component/List'

import Header from './component/Header'
import {Login} from './component/Login'
//import routes from './utils/router'
import './App.css'
function App() {
  return (
    <Router basename="react">
      <div>
        <div className="header"><Header/></div>
        <div  className="menu"><Menu /></div>
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/list" component={List} />
           
        </div>
      </div>
    </Router>
  );
}
export default App;
