import React from 'react';
import Card from './Card'; // Asegúrate de tener el componente Card

const CardsGrid = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} image={card.image} description={card.description} />
      ))}
    </div>
  );
}

export default CardsGrid;