import React from 'react';

function Table({guesses}) {
  return <div className="guess-results">
    {guesses.map((guess, index) => (<p key={index} className="guess">{guess}</p>))}
  </div>;
}

export default Table;
