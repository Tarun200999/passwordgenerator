import React from 'react';
import './App.css';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Main from './component/main';



function App() {
  return (
    <div className="App">

      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
