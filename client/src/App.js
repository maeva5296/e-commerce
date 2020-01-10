
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Test from './Components/Test/Test';

import AdminArticles from './Components/AdminArticles/AdminArticles';
import './App.css';

function App() {
  return (
    <div className="App">
      <AdminArticles />
      {/* <Test/> */}
      {/* <NavBar/>
      <Home /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
