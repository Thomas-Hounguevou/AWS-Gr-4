import React from 'react';
import './leaderboard.css';

const playersList = [
  {
    name: 'BOUALI ABDELHADI',
    score: '7834',
  },
  {
    name: 'DOCHERTY RONAN',
    score: '5834',
  },
  {
    name: 'HOUNGUEVOU THOMAS',
    score: '4834',
  },
  {
    name: 'JERRAR HASSAN',
    score: '6334',
  },
];

const LeaderBoard = () => {
  return (
    <div className="leaderboard_container">
      <div>
        <h1>Meilleurs joueurs :</h1>
        <ol className="leaderboard_list">
          {playersList.map((player, index) => (
            <li>
              <span>{index + 1}.</span>

              <span>{player.name}</span>
              <span>{player.score} points</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default LeaderBoard;
