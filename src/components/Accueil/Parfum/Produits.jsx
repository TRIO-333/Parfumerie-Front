import React, { useState, useEffect } from 'react';
import './Produits.css';

const Produits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: 1,
      name: 'LANCÔME',
      description: 'La vie est belle Eau de Parfum Rechargeable',
      price: '186,66€',
      oldPrice: '213,00€',
      image: 'https://via.placeholder.com/200x300',
      rating: 5,
    },
    {
      id: 2,
      name: 'CHANEL',
      description: 'Chanel Eau de Toilette',
      price: '124,00€',
      oldPrice: '',
      image: 'https://via.placeholder.com/200x300',
      rating: 5,
    },
    {
      id: 3,
      name: 'VICTORIAS SECRET',
      description: 'La vie est belle Eau de Parfum',
      price: '99,00€',
      oldPrice: '',
      image: 'https://via.placeholder.com/200x300',
      rating: 5,
    },
    {
      id: 4,
      name: 'MYWAY',
      description: 'La vie est belle Eau de Parfum',
      price: '99,00€',
      oldPrice: '',
      image: 'https://via.placeholder.com/200x300',
      rating: 5,
    },
    {
      id: 5,
      name: 'DIOR',
      description: 'J\'adore Eau de Parfum',
      price: '140,00€',
      oldPrice: '170,00€',
      image: 'https://via.placeholder.com/200x300',
      rating: 4,
    },
    {
      id: 6,
      name: 'GUCCI',
      description: 'Bloom Eau de Parfum',
      price: '120,00€',
      oldPrice: '150,00€',
      image: 'https://via.placeholder.com/200x300',
      rating: 4,
    },
    {
      id: 7,
      name: 'YSL',
      description: 'Libre Eau de Parfum',
      price: '110,00€',
      oldPrice: '130,00€',
      image: 'https://via.placeholder.com/200x300',
      rating: 5,
    },
    {
      id: 8,
      name: 'HERMÈS',
      description: 'Terre d\'Hermès Eau de Parfum',
      price: '130,00€',
      oldPrice: '160,00€',
      image: 'https://via.placeholder.com/200x300',
      rating: 5,
    },
    // Ajoutez plus de produits ici
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="produits">
      <h2>Nos <span className="highlight">nouveautés</span></h2>
      <div className="carousel">
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / products.length)}%)` }}>
          {products.map(product => (
            <div key={product.id} className="carousel-item">
              <div className="product-image" onClick={() => handleImageClick(product)}>
                <img src={product.image} alt={product.name} />
                <span className="new">Nouveauté</span>
                <span
                  className={`favorite ${favorites.includes(product.id) ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
                >&#10084;</span>
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
        <button className="next" onClick={handleNext}>&#10095;</button>
      </div>

      {selectedProduct && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
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

export default Produits;
