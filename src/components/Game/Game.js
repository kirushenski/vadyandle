import { sample } from '../../utils'
import { WORDS } from '../../data'
import Input from '../Input/Input'
import Table from '../Table/Table'
import { useState } from 'react'
import HappyBanner from '../HappyBanner'
import SadBanner from '../SadBanner/SadBanner'
import Keyboard from '../Keyboard/Keyboard'

const useGuesses = () => {
  const [guesses, setGuesses] = useState([])

  const guessesCount = guesses.length

  const lastGuess = guesses.at(-1)
  const isCorrectAnswer = lastGuess?.every(({ status }) => status === 'correct') ?? false
  const isHappy = isCorrectAnswer && guessesCount <= 6
  const isSad = !isCorrectAnswer && guessesCount === 6
  const isEnd = isHappy || isSad

  return { guesses, setGuesses, guessesCount, isHappy, isSad, isEnd }
}
function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS).value)

  const { guesses, setGuesses, guessesCount, isHappy, isSad, isEnd } = useGuesses()

  return (
    <>
      <Table guesses={guesses} />
      <Input setGuesses={setGuesses} answer={answer} isEnd={isEnd} />
      {isHappy && (
        <HappyBanner
          guessesCount={guessesCount}
          setAnswer={setAnswer}
          setGuesses={setGuesses}
        />
      )}
      {isSad && (
        <SadBanner answer={answer} setAnswer={setAnswer} setGuesses={setGuesses} />
      )}
      <Keyboard guesses={guesses} />
    </>
  )
}

export default Game
