import React from 'react';
import NavBar from './components/navBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

export function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting=" BIENVENIDO "/>
    </div>
  )
}

export default App;
