import style from './Gallows.module.css'

const head = <div className={style.head}/>
const body = <div className={style.body}/>
const leftArm = <div className={style.left__arm}/>
const rightArm = <div className={style.right__arm}/>
const leftLeg = <div className={style.left__leg}/>
const rightLeg = <div className={style.right__leg}/>

const man = [head, body, leftArm, rightArm, leftLeg, rightLeg]

type TypeManToDraw = {
  numberOfGuesses: number;
}

export const Gallows = ({ numberOfGuesses }: TypeManToDraw) => {
  return (
    <div className={style.main}>
        {man.slice(0, numberOfGuesses)}
        <div className={style.rope}></div>
        <div className={style.top__bar}></div>
        <div className={style.middle__bar}></div>
        <div className={style.bottom__bar}></div>
    </div>
  )
}
