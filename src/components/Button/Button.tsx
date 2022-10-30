import React from "react";
import s from './button.module.css'
type buttonPropsType = {
  name: string,
  callBack: () => void,
  className: string,
}

export const Button = (props: buttonPropsType) => {

  const buttonHandler = () => {
    props.callBack()
  }

  return(
    <button className={props.className=='activeButton'?s.active:''} onClick={buttonHandler}>{props.name}</button>
  )
  
}

