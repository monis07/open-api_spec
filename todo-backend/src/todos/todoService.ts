//services is a file where u create functions that interact with the database so whoever is calling it doesnt need to write SQL queries
import { Todo } from './todo';

export type TodoCreationParams = Pick<Todo, 'title' | 'description'>; //this is better because if in the future title changes from string to number, you only need to change it in one place

export class TodoService{
    //like here u call .get and give todo id in the paramaters and it returns with all the details of the todo like title, description and all 
    public get(todoId: string):Todo{
        console.log('mongodb todo call to get a todo from the backend using todoId'); 
        return {
            title: 'mock title of todo',
            description: 'mock description of todo',
            id: todoId,
            done: false
        }
    }

    public create(todoCreationParams: TodoCreationParams):Todo{
        console.log("here post todo call to create a todo in the backend")
        return {
            title: 'mock title of todo',
            description: 'mock description of todo',
            id: "1",
            done: false
        }
    }
}