import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./components/todo.model";

function App() {

    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos([{id: Math.random().toString(), text: text}])
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList items={todos}/>
        </div>
    );
}

export default App;