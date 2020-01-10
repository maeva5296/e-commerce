
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Article from './Components/Article/Article';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Admin from './Components/Admin/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/articles" component={Article}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;