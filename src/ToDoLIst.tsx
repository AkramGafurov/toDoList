import React, {useState} from 'react';
import {FC, MouseEvent, ChangeEvent} from 'react'
import {FilterValuesType} from './App'
import {Button} from './components/Button/Button'
import {Input} from './components/Input/Input'
import s from './toDoList.module.css'


type TodoListPropsType = {
    toDoListId: string
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (toDoListId: string, taskid: string) => void,
    changeFilter: (toDoListId: string, filter: FilterValuesType) => void,
    addTask: (toDoListId: string, userInput: string) => void,
    changeTaskStatus: (toDoListId: string, idTask: string, isDone: boolean) => void,
    removeList: (toDoListId: string) => void,
    filter: FilterValuesType
}

export type  TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

const ToDoLIst/*: FC<TodoListPropsType> можно типизировать и так*/ = (props: TodoListPropsType) => {
// -------добавление сообщений через инпут-------
    let [userInput, setUserInput] = useState('');
//-------функция удаления полей-------

    const deleteHandler = (toDoListId: string, taskid: string) => {
        props.deleteTask(toDoListId, taskid)
    }

    const tasksList = props.tasks.map((item) => {
            const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                let newStatus = event.currentTarget.checked
                props.changeTaskStatus(props.toDoListId, item.id, newStatus)
            }
            return (
                <li className={item.isDone ? s.isDoneTask : ''}>
                    <input onChange={onChangeHandler} type="checkbox" checked={item.isDone}/>
                    <span>{item.title}</span>
                    <Button className={''} name='x' callBack={() => {
                        deleteHandler(props.toDoListId, item.id)
                    }}/>
                </li>
            )
        }
    )

//-------функция обработки нажатия кнопок фильтрации-------
    const onClickFilterHandler = (value: FilterValuesType) => {
        {
            props.changeFilter(props.toDoListId, value)
        }
    }
// -------генерация ошибки при пустом инпуте-------
    let [error, setError] = useState<string | null>(null)
    let classNameError = error ? 'error' : '';
//-------функция добавления полей-------
    const addTask = () => {
        error = userInput.trim() ? '' : 'title is required'
        if (error) {
            setError(error)
            setUserInput('')
        } else {
            props.addTask(props.toDoListId, userInput)
            setError(null)
            setUserInput('')
        }
    }
//-------функция удаления списка-------

    const removeToDoListHandler = () => {
        props.removeList(props.toDoListId)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <Button className={''} name={'Remove Tasks List'} callBack={removeToDoListHandler}/>
            <div>
                <Input toDoListId={props.toDoListId} error={classNameError} userInput={userInput}
                       setUserInput={setUserInput} addTask={addTask} setError={setError}
                />
                <Button className={''} name={'+'} callBack={addTask}/>
                {error && <p className={s.erroMessage}>{error}</p>}
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button className={props.filter == 'all' ? 'activeButton' : ''} name={'All'}
                        callBack={() => onClickFilterHandler('all')}/>

                <Button className={props.filter == 'active' ? 'activeButton' : ''} name={'Active'}
                        callBack={() => onClickFilterHandler('active')}/>

                <Button className={props.filter == 'completed' ? 'activeButton' : ''} name={'Completed'}
                        callBack={() => onClickFilterHandler('completed')}/>
            </div>
        </div>
    );
}

export default ToDoLIst;
