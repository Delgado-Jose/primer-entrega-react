import React, { useState } from 'react';
import NavBar from './components/navBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './App.css';

export function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleShowDetails = (id) => {
    setSelectedProductId(id);
  };

  const handleBackToList = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="App">
      <NavBar />
      {selectedProductId ? (
        <ItemDetailContainer id={selectedProductId} onBack={handleBackToList} />
      ) : (
        <ItemListContainer greeting="BIENVENIDO" onShowDetails={handleShowDetails} />
      )}
    </div>
  );
}

export default App;
