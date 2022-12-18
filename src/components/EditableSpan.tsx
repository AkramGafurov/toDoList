import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
import {EditableSpanPropsType, } from "../data/type";

export const EditableSpan = (props:EditableSpanPropsType) => {
    const onChangeStatusHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        let newStatus = e.currentTarget.checked
        props.changeStatus(newStatus)
    }

    const onClickHandler=()=>{
        props.deleteTask();
    }

    return (
        <div>
            <input type="checkbox"
                   onChange={onChangeStatusHandler}
                   checked={props.status}/>
            <span>{props.title}</span>
            <button onClick={onClickHandler}>x
            </button>
        </div>
    )


}
