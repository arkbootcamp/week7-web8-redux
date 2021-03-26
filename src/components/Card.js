import React from 'react'
import {useSelector} from 'react-redux'
import style from './card.module.css'

function Card() {
    const {count} = useSelector(state=>state)
  return (
    <div className={style.wrapper}>
      <h1>nilai : {count}</h1>
    </div>
  )
}

export default Card
