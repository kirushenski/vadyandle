import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function SadBanner({answer, setAnswer, setGuesses}) {
  const handleRestart = () => {
    setAnswer(sample(WORDS))
    setGuesses([])
  }

  return <div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  <button onClick={handleRestart}>Restart game</button>
</div>;
}

export default SadBanner;
