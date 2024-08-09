"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    //like here u call .get and give todo id in the paramaters and it returns with all the details of the todo like title, description and all 
    get(todoId) {
        console.log('mongodb todo call to get a todo from the backend using todoId');
        return {
            title: 'mock title of todo',
            description: 'mock description of todo',
            id: todoId,
            done: false
        };
    }
    create(todoCreationParams) {
        console.log("here post todo call to create a todo in the backend");
        return {
            title: 'mock title of todo',
            description: 'mock description of todo',
            id: "1",
            done: false
        };
    }
}
exports.TodoService = TodoService;
