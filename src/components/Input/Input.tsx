import React from "react";
import {ChangeEvent, KeyboardEvent} from "react"
import s from './input.module.css'

type inputPropsType = {
  toDoListId:string,
  userInput: string,
  setUserInput: (userInput:string) => void,
  addTask: () => void,
  error: string,
  setError:(error:string|null)=>void,
}

export const Input = (props: inputPropsType) => {

  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    let userInput = event.currentTarget.value;    
    props.setUserInput(userInput);
  }

  const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
    props.setError(null)
    if(event.key === 'Enter') {
      props.addTask()
    }
  }
  return(
  <input className={props.error? s.error:''} value={props.userInput} onChange = {onChangeHandler} onKeyDown={onKeyPressHandler}/>  
  )
}

