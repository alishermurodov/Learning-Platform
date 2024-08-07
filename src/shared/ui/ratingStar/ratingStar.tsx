'use client'
import React, { useState } from 'react';
import styles from './RatingComponent.module.css';

interface RatingComponentProps {
  totalStars?: number;
}

export const RatingComponent: React.FC<RatingComponentProps> = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState<number>(3);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={styles.rating}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < (hoverRating || rating) ? styles.filled : ''}`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
};
