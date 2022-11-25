import React from 'react';
import Todo from './Todo';

// todoList component
const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    if (filteredTodos.length > 0) {
        return(
            <div className="todo-container">
                <ul className="todo-list">
                    {/* every item in the filteredTodos array will render the <Todo/> component */}
                    {filteredTodos.map((todo) => (
                        <Todo 
                            setTodos={setTodos} 
                            todos={todos} 
                            text={todo.text} 
                            key={todo.id} 
                            todo={todo}
                        />
                    ))};
                </ul>
            </div>
        );
    } else {
        return(
            <div className="todo-container">
                <ul className="todo-list">
                    <h1>To-Do List is empty...</h1>
                </ul>
            </div>
        );
    }
}

export default ToDoList;