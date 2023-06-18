import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Column from './Column';
import './App.css';

const RactDnd = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'To Do',
      cards: [
        { id: 1, content: 'Task 1' },
        { id: 2, content: 'Task 2' },
        { id: 3, content: 'Task 3' },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        { id: 4, content: 'Task 4' },
        { id: 5, content: 'Task 5' },
      ],
    },
    {
      id: 3,
      title: 'Done',
      cards: [{ id: 6, content: 'Task 6' }],
    },
  ]);

  const moveCard = (dragColumnId, hoverColumnId, cardId) => {
    const dragColumnIndex = columns.findIndex(
      (column) => column.id === dragColumnId
    );
    const hoverColumnIndex = columns.findIndex(
      (column) => column.id === hoverColumnId
    );

    const dragCardIndex = columns[dragColumnIndex].cards.findIndex(
      (card) => card.id === cardId
    );

    const dragCard = columns[dragColumnIndex].cards[dragCardIndex];

    setColumns((prevState) => {
      const newColumns = [...prevState];

      newColumns[dragColumnIndex].cards.splice(dragCardIndex, 1);
      newColumns[hoverColumnIndex].cards.push(dragCard);

      return newColumns;
    });
  };

  return (
    <div  style={{marginLeft:'600px',marginTop:'1000px'}}>
    <div className="app">
      <div className="board">
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            cards={column.cards}
            moveCard={moveCard}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default RactDnd;
