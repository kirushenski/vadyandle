import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function HappyBanner({guessesCount, setAnswer, setGuesses}) {
  const handleRestart = () => {
    setAnswer(sample(WORDS))
    setGuesses([])
  }

  return <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in <strong>{guessesCount} guesses</strong>.
  </p>
  <button onClick={handleRestart}>Restart game</button>
</div>;
}

export default HappyBanner;
