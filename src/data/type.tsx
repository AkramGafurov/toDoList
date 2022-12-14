import {v1} from "uuid";
import {EditableSpan} from "../components/EditableSpan";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
    id:string,
    title: string,
    filter:FilterValuesType
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type ToDoListPropsType = {
    title: string
    idTasksList: string
    tasks: Array<TaskType>
    removeTask: (idTasksList: string, idTask: string) => void
    changeFilter: (idTasksList: string, value: FilterValuesType) => void
    addTask: (idTasksList: string, title: string) => void
    changeTaskStatus: (idTasksList: string, idTask: string, newStatus:boolean) => void
    // filter: FilterValuesType
    removeToDoList:(idTasksList: string)=>void
}
export type InputPropsType = {
    callback: (title:string)=>void
}
export type EditableSpanPropsType={
    changeStatus:(newStatus:boolean)=>void,
    status: boolean,
    title: string,
    deleteTask:()=>void,
}
