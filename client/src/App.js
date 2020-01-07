import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
