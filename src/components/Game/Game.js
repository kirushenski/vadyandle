import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Table from '../Table/Table';
import { useState } from 'react';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const guessesCount = guesses.length
  const lastGuess = guesses.at(-1)
  const isCorrectAnswer = lastGuess?.every(({status}) => status === 'correct') ?? false
  const isHappy = isCorrectAnswer && guessesCount < 6
  const isSad = !isCorrectAnswer && guessesCount === 6
  const isEnd = isHappy || isSad

  return <><Table guesses={guesses}/><Input setGuesses={setGuesses} answer={answer} isEnd={isEnd}/>
  {isHappy && <HappyBanner guessesCount={guessesCount}/>}
  {isSad && <SadBanner answer={answer}/>}
  <Keyboard  guesses={guesses}/>
  </>;
}

export default Game;
