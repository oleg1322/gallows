import style from './Keyboard.module.css'

const letters = [
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я'
]

type TypeLetters = {
  disabled: boolean;
  correctLetters: string[];
  incorerrectLettser: string[];
  addGuessedLetter: (letter: string) => void;
  wordToGuess: string;
}


export const Keyboard = ({disabled, correctLetters, incorerrectLettser, addGuessedLetter, wordToGuess}:TypeLetters) => {
  return (
    <div className={style.container}>
      {letters.map((letter, index) => (
      <button 
        onClick={() => addGuessedLetter(letter)}
        disabled={(incorerrectLettser || correctLetters).includes(letter) || disabled? true: false} 
        className={correctLetters.includes(letter) || disabled && wordToGuess.includes(letter)? style.active: ''} 
        key={index}>{letter}
      </button>))}
    </div>
  )
}
