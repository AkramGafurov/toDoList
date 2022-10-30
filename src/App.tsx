import {ftruncate} from 'fs';
import React, {useState} from 'react';
import {isTemplateExpression} from 'typescript';
import {v1} from 'uuid';
import './App.css';
import ToDoLIst from './ToDoLIst';
import {TaskType} from './ToDoLIst'

export type FilterValuesType = 'all' | 'active' | 'completed'

type TodolistsType = {
    id: string,
    title: string,
    filter: string,
}

function App() {
    // let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    //     {id: v1(), title: 'What to learn', filter: 'all'},
    //     {id: v1(), title: 'What to buy', filter: 'completed'},
    // ])

    // const [tasks, setTasks] = useState([
    //     {id: v1(), title: 'HTML&CSS', isDone: true,},
    //     {id: v1(), title: 'JS', isDone: true,},
    //     {id: v1(), title: 'ReactJS', isDone: false,},
    //     {id: v1(), title: 'Redux', isDone: false,},
    //     {id: v1(), title: 'GraphQL', isDone: false,}
    // ]);


    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'completed'},
    ])

    const [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true,},
            {id: v1(), title: 'JS', isDone: true,},
            {id: v1(), title: 'ReactJS', isDone: false,},
            {id: v1(), title: 'Redux', isDone: false,},
            {id: v1(), title: 'GraphQL', isDone: false,}
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true,},
            {id: v1(), title: 'JS2', isDone: true,},
            {id: v1(), title: 'ReactJS2', isDone: false,},
            {id: v1(), title: 'Redux2', isDone: false,},
            {id: v1(), title: 'GraphQL2', isDone: false,}
        ],
    });


    function deleteTask(toDoListId: string, taskid: string) {
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')

    function changeFilter(toDoListId: string, value: FilterValuesType) {
        // setTodolists(todolists.map(item => item.id === toDoListId ? {...item, filter: value} : item))
    }

    // // -------добавление сообщений через инпут-------
    // let [userInput, setUserInput] = useState('');

    // -------генерация ошибки при пустом инпуте-------

    const addTask = (toDoListId: string, userInput: string) => {

        // let newTask = {id: v1(), title: userInput, isDone: true,}
        // setTasks({...tasks, [toDoListId]: [newTask, ...tasks[toDoListId]]})

    }

    // -------оживление чекбоксов-------

    const changeTaskStatus = (toDoListId: string, idTask: string, newStatus: boolean) => {
        // setTasks({
        //     ...tasks,
        //     [toDoListId]: tasks[toDoListId].map(item => item.id === idTask ? {...item, isDone: newStatus} : item)
        // })


        // setTasks(tasks.map(item => item.id === idTask? {...item, isDone:newStatus}: item))
    }

    const removeList = (toDoListId: string) => {
        // setTodolists(todolists.filter(item => item.id !== toDoListId))
    }


    return (
        <div className='App'>

            {todolists.map((item) => {
                let taskForToDoList = tasks[item.id];
                if (item.filter === 'active') {
                    tasks[item.id].filter(item => item.isDone === false)
                } else if (item.filter === 'completed') {
                    tasks[item.id].filter(item => item.isDone === false)
                }
                return (
                    <ToDoLIst
                        title={item.title}
                        tasks={taskForToDoList}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={item.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;

