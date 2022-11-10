import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ToDoListPropsType} from './data/type';


export function Todolist(props: ToDoListPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }
    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");
    const onDeleteTaskClickHandler = (idTasksList: string, idTask: string) => props.removeTask(idTasksList, idTask)


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>

            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={()=> {
                            onDeleteTaskClickHandler(props.idTasksList, t.id)
                        }}>x</button>
                    </li>
                })
            }

        </ul>
        <div>
            {/*<button className={props.filter === 'all' ? "active-filter" : ""}*/}
            <button className={''}
                    onClick={onAllClickHandler}>All</button>
            {/*<button className={props.filter === 'active' ? "active-filter" : ""}*/}
            <button className={''}
                onClick={onActiveClickHandler}>Active</button>
            {/*<button className={props.filter === 'completed' ? "active-filter" : ""}*/}
            <button className={''}
                onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
