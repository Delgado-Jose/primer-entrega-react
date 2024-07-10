import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div className="container">
            <h2>{props.greeting}</h2>
            {/* Aquí irá el catálogo de productos en el futuro */}
        </div>
    );
}

export default ItemListContainer;
