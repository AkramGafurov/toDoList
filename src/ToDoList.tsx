import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ToDoListPropsType} from './data/type';
import {Input} from "./components/Input";
import {EditableSpan} from "./components/EditableSpan";


export function ToDoList(props: ToDoListPropsType) {

    // let [title, setTitle] = useState("")
    // let [error, setError] = useState<string | null>(null)

    // const addTask = () => {
    //     if (title.trim() !== "") {
    //         props.addTask(props.idTasksList, title.trim());
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }
    const addTaskHandler = (newTitle: string) => {
        props.addTask(props.idTasksList, newTitle);
    }

    const onAllClickHandler = () => props.changeFilter(props.idTasksList, "all");
    const onActiveClickHandler = () => props.changeFilter(props.idTasksList, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.idTasksList, "completed");
    const onDeleteTaskClickHandler = (idTasksList: string, idTask: string) => {
        props.removeTask(idTasksList, idTask)
    }
    const onChangeStatus = (idTasksList: string, idTask: string, newStatus: boolean) => {
        props.changeTaskStatus(idTasksList, idTask, newStatus);
    }
    const removeToDoListHandler = () => {
        props.removeToDoList(props.idTasksList)
    }

    return <div>

        <h3>{props.title}
            <button onClick={removeToDoListHandler}>X</button>
        </h3>

        <Input callback={addTaskHandler}/>
        {/*<div>*/}
        {/*    <input value={title}*/}
        {/*           onChange={onChangeHandler}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           className={error ? "error" : ""}*/}
        {/*    />*/}
        {/*    <button onClick={addTask}>+</button>*/}
        {/*    {error && <div className="error-message">{error}</div>}*/}
        {/*</div>*/}

        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <EditableSpan
                            changeStatus={(newStatus) => {
                                onChangeStatus(props.idTasksList, t.id, newStatus)
                            }}
                            status={t.isDone}
                            title={t.title}
                            deleteTask={()=> {
                                onDeleteTaskClickHandler(props.idTasksList, t.id)
                            }}/>
                            {/*<input type="checkbox"*/}
                            {/*       onChange={(e) => {*/}
                            {/*           let newStatus = e.currentTarget.checked*/}
                            {/*           onStatusChangeHandler(props.idTasksList, t.id, newStatus)*/}
                            {/*       }}*/}
                            {/*       checked={t.isDone}/>*/}
                            {/*<span>{t.title}</span>*/}
                            {/*<button onClick={() => {*/}
                            {/*    onDeleteTaskClickHandler(props.idTasksList, t.id)*/}
                            {/*}}>x*/}
                            {/*</button>*/}
                    </li>
                })
            }

        </ul>
        <div>
            {/*<button className={props.filter === 'all' ? "active-filter" : ""}*/}
            <button className={''}
                    onClick={onAllClickHandler}>All
            </button>
            {/*<button className={props.filter === 'active' ? "active-filter" : ""}*/}
            <button className={''}
                    onClick={onActiveClickHandler}>Active
            </button>
            {/*<button className={props.filter === 'completed' ? "active-filter" : ""}*/}
            <button className={''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
