import {v1} from "uuid";

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
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    // filter: FilterValuesType
}
