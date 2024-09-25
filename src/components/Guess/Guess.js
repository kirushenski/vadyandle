import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';

function Guess({guess = ''}) {
  return <p class="guess">
    {range(0, WORD_LENGTH).map((cell) => <span key={cell} className="cell">{guess[cell]}</span>)}
  </p>;
}

export default Guess;
