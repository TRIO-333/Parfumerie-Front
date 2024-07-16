// src/components/Accueil/Avis/Reviews.jsx
import React, { useEffect, useState } from 'react';
import { firestore } from '../../../firebase';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = await firestore.collection('reviews').orderBy('createdAt', 'desc').get();
      setReviews(reviewsCollection.docs.map(doc => doc.data()));
    };
    fetchReviews();
  }, []);

  return (
    <div className="review-container">
      <h3>Les avis</h3>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-user">
              <div className="review-user-pic">
                <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>
                  <path stroke-width="2" fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>
                </svg>
              </div>
              <div className="review-user-info">
                <span>{review.user}</span>
                <p>{new Date(review.createdAt.seconds * 1000).toLocaleString()}</p>
              </div>
            </div>
            <div className="review-content">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
