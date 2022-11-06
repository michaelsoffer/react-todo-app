import React from 'react';
import Todo from './Todo';

// todoList component
const ToDoList = ({ todos, setTodos, filteredTodos }) => {
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
}

export default ToDoList;