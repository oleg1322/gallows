import style from './WordToGuess.module.css'

type TypeWordToGuess = {
  wordToGuess:string;
  guessedLetters:string[];
  endGame: boolean;
}

export const WordToGuess = ({wordToGuess, guessedLetters, endGame}:TypeWordToGuess) => {

  console.log(wordToGuess)
  return (
    <div className={style.word}>{wordToGuess.split('').map((letter, index) => (
      <span className={style.underline} key={index}>
        <span style={{visibility: guessedLetters.includes(letter) || endGame? 'visible': 'hidden'}}>{letter}</span>
      </span>
    ))}</div>
  )
}
