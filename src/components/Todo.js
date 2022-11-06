import React from 'react';

// Todo component
const Todo = ({ text, todo, todos, setTodos }) => {
    // deletes a todo task from the todo list. 
    const deleteHandler = () => {
        setTodos(todos.filter((elem) => {
            return elem.id !== todo.id;
        }));
    }

    // toggles the 'completed' truth value from true to false, or false to true
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }));
    }

    return(
        <div className='todo'>
            {/* 'completed' class is added if todo.completed is true, or not if false */}
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button className='complete-btn' onClick={completeHandler}><i className='fas fa-check'></i></button>
            <button className='trash-btn' onClick={deleteHandler}><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;