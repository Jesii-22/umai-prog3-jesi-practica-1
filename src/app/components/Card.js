import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div>
      {/* Utiliza la imagen pasada como prop */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;