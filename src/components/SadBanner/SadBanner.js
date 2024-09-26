import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function SadBanner({answer, setAnswer, setGuesses}) {
  const handleRestart = () => {
    setAnswer(sample(WORDS).value)
    setGuesses([])
  }

  return <div className="sad banner">
  <p>Cорре, нужно было отвечать <strong>{answer}</strong> 🤷🏿‍♂️</p>
  <button onClick={handleRestart}>Ещё трай</button>
</div>;
}

export default SadBanner;
