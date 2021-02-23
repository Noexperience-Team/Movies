
import './App.css';
import React, { useState } from "react";
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
function App() {
  const [selectedOption,setSelectedOption]=useState(requests.fetchTrending);

  return (
    <div className="app">
      <header className="App-header">
        
     
        <Header/>
        <Nav setSelectedOption={setSelectedOption}/>  
        <Results selectedOption={selectedOption}/>  
      </header>
    </div>
  );
}

export default App;
