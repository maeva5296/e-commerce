
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AdminArticles from './Components/AdminArticles/AdminArticles';
import './App.css';

function App() {
  return (
    <div className="App">
      <AdminArticles />
      {/* <NavBar/>
      <Home /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
