import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Card from './Card';
import './Column.css';

const Column = ({ id, title, cards, moveCard }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      moveCard(item.columnId, id, item.cardId);
    },
  });

  return (
    <div className="column" ref={drop}>
      <h3>{title}</h3>
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Column;