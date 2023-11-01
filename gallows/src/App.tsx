import { useCallback, useEffect, useState } from 'react'
import wordList from './wordList.json'

import style from './App.module.css'
import { Gallows } from './components/Gallows/Gallows'
import { WordToGuess } from './components/WordToGuess/WordToGuess'
import { Keyboard } from './components/Keyboard/Keyboard'

export const App = () => {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  console.log(incorrectLetters)
  
  const addGuessedLetter = useCallback((letter:string) => {
      if (guessedLetters.includes(letter)) return
      setGuessedLetters(prev => [...prev, letter])
    }
  ,[guessedLetters])

  useEffect(() => {
    
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[а-я]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    } 
  
    document.addEventListener('keypress', handler)

    return () => {document.removeEventListener('keypress', handler)}
  }
  ,[addGuessedLetter, guessedLetters])

  const replay = () => {
    setWordToGuess(wordList[Math.floor(Math.random() * wordList.length)])
    setGuessedLetters([])
  }

  const isWinner:boolean = wordToGuess.split('').every(letter => guessedLetters.includes(letter))
  const isLoser:boolean = incorrectLetters.length >= 6

  return (
    <div className={style.container}>
      <Gallows numberOfGuesses={incorrectLetters.length}/>
      <WordToGuess wordToGuess={wordToGuess} guessedLetters={guessedLetters} endGame={isWinner || isLoser}/>
      <div style={{alignSelf:'stretch'}}>
        <Keyboard
          disabled={isWinner || isLoser}
          correctLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          incorerrectLettser={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          wordToGuess={wordToGuess}
        />
      </div>
      <button onClick={replay}>Заново</button>
    </div>
  )
}

export default App