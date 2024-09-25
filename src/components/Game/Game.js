import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Table from '../Table/Table';
import { useState } from 'react';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])

  return <><Table guesses={guesses}/><Input setGuesses={setGuesses} answer={answer}/></>;
}

export default Game;
