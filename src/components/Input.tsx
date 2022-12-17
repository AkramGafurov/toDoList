import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
import {InputPropsType} from "../data/type";
export const Input=(props:InputPropsType)=>{
    const [title, setTitle]=useState('');
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'enter') {
            addTask();
        }
    }
    const addTask = () => {
        if (title.trim() !== "") {
            props.callback(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    return(
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>

    )
}
