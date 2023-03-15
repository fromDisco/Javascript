import axios from 'axios';

// Type annotation for ajax-request
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    
    /* 
    *****************************************************
    response-object 'todo must have same structure as 
    'inferface Todo' it can't have other properties as 
    the ones defined in 'interface Todo' 
    *****************************************************
    */
    const todo = response.data as Todo; 
    const {id, title, completed} = todo;

    logTodo(id, title, completed);
});

// defining the type of the arguments. A wrong type throws an error
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        This is ID: ${id},
        with a title of: ${title},
        is it completed?: ${completed}
    `);
};