import { Todo } from "../model/todo.js";

export async function getTodoByDate(date) {
    const todoDate = date.split("-")
    return Todo.findAll({ where: { year: todoDate[0], month: todoDate[1], day: todoDate[2] } })
}

export async function postTodoByDate(date, todo) {
    const todoDate = date.split("-")
    Todo.create({
        year: todoDate[0],
        month: todoDate[1],
        day: todoDate[2],
        todo: todo,
    });
}