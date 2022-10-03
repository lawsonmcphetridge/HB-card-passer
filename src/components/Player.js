import React from 'react';
import CardList from './CardList';
import { useContext } from 'react';
import { UserContext } from '../context/GameContext';

export default function Player({
  player,
  setTo,
  hand,
  to,
}) {
  const { selectedCard, setSelectedCard, setFrom } = useContext(UserContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
