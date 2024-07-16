import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Offre.css';

const Offre = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Remplacez l'URL par l'endpoint de votre backend pour récupérer les produits
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits:', error);
      });
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="offre">
      <h2><span className="highlight">Offre fidélité :</span> -25% sur une sélection</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <div className="product-image" onClick={() => handleImageClick(product)}>
              <img src={product.imageUrl} alt={product.name} />
              <span className="promo">Promo</span>
              <span className="favorite">&#10084;</span>
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="rating">
              {'★'.repeat(product.rating)}
            </div>
            <div className="price">
              <span className="current-price">{product.price}</span>
              {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <div className="rating">
              {'★'.repeat(selectedProduct.rating)}
            </div>
            <div className="price">
              <span className="current-price">{selectedProduct.price}</span>
              {selectedProduct.oldPrice && <span className="old-price">{selectedProduct.oldPrice}</span>}
            </div>
            <button onClick={closePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offre;
