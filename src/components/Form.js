import React from 'react';

// form component 
const Form = ({setTextInput, todos, setTodos, textInput, setStatus}) => {
    // JS
    // updates textInput state to the user input
    const textInputHandler = (e) => {
        setTextInput(e.target.value);   // pass text input to setInputText function
    }

    // updates the todos array in state with the addition of the new todo added
    const submitTodoHandler = (e) => {
        e.preventDefault(); // prevents page refresh
        setTodos([...todos, { text: textInput, completed: false, id: Math.random() * 100 }]);
        setTextInput("");   // reset todo input
    }

    // updates status in state
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    // HTML
    return (
        <form>
            <input value={textInput} onChange={textInputHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;