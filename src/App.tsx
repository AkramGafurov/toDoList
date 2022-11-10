import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {FilterValuesType, TodolistsType, TaskType} from './data/type'

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(idTasksList: string, idTask: string) {
        setTasks({...tasks, [idTasksList]:tasks[idTasksList].filter(item=>item.id!==idTask)})
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(idTasksList:string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
            setTasks({...tasks, [idTasksList]:[newTask,...tasks[idTasksList]]})
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(idTasksList: string, idTask: string, newStatus:boolean){
        setTasks({...tasks, [idTasksList]:tasks[idTasksList].map(item=>item.id===idTask?{...item,isDone:newStatus}:item)})
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
    }

    function changeFilter(idTasksList: string, value: FilterValuesType) {
        setTodolists(todolists.map(item=>item.id===idTasksList?{...item, filter:value}:item))
        // setFilter(value);
    }

    // setTasks([...tasks]);
    return (
        todolists.map(item => {
            let tasksForTodolist = tasks[item.id];

            if (item.filter === "active") {
                tasksForTodolist = tasks[item.id].filter(t => t.isDone === false);
            } else if (item.filter === "completed") {
                tasksForTodolist = tasks[item.id].filter(t => t.isDone === true);
            }
            return (<div className="App">
                <Todolist
                    key={item.id}
                    idTasksList = {item.id}
                    title={item.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                />
            </div>)
        })
    )

}

export default App;
