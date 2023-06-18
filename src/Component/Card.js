import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import './Card.css';

const Card = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      cardId: id,
      columnId: id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`card ${isDragging ? 'dragging' : ''}`}
      ref={drag}
    >
      {content}
    </div>
  );
};

export default Card;
