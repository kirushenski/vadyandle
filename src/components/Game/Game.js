import { sample } from '../../utils'
import { WORDS } from '../../data'
import Input from '../Input/Input'
import Table from '../Table/Table'
import { useState } from 'react'
import HappyBanner from '../HappyBanner'
import SadBanner from '../SadBanner/SadBanner'
import Keyboard from '../Keyboard/Keyboard'
import { checkGuess } from '../../game-helpers'

const useGuesses = (answer) => {
  const [guesses, setGuesses] = useState([])
  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer))

  const guessesCount = guesses.length

  const lastGuess = guesses.at(-1)
  const isCorrectAnswer = lastGuess?.every(({ status }) => status === 'correct') ?? false
  const isHappy = isCorrectAnswer && guessesCount <= 6
  const isSad = !isCorrectAnswer && guessesCount === 6
  const isEnd = isHappy || isSad

  return { validatedGuesses, setGuesses, guessesCount, isHappy, isSad, isEnd }
}
function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS).value)

  const { validatedGuesses, setGuesses, guessesCount, isHappy, isSad, isEnd } =
    useGuesses(answer)

  const handleRestart = () => {
    setAnswer(sample(WORDS).value)
    setGuesses([])
  }

  return (
    <>
      <Table validatedGuesses={validatedGuesses} />
      <Input setGuesses={setGuesses} isEnd={isEnd} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {isHappy && (
        <HappyBanner guessesCount={guessesCount} handleRestart={handleRestart} />
      )}
      {isSad && <SadBanner answer={answer} handleRestart={handleRestart} />}
    </>
  )
}

export default Game
