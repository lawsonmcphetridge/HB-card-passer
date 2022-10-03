import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { UserContext } from '../context/GameContext';

export default function ExecutePassButton({
  passCard,
}) {
  const { selectedCard, setSelectedCard, from, to } = useContext(UserContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} /> from{' '}
      {from} to {to}
    </div>
  );
}
