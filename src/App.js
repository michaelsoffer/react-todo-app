import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // this function will only run once when the app is first loaded, and it retrieves the todos in the local storage
  useEffect(() => {
    getLocalTodos();
  }, []);

  // runs every time todos or status changes and it will simply save the todos list. 
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // filter the todos list based on which status is selected from filter options
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((item) => item.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // if todos in localstorage is empty, it will set todos in local storage to an empty array
  // if todos in localstorage is not empty, this will set todos state to the local 'todos' 
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Michael's To-Do List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        textInput={textInput} 
        setTextInput={setTextInput}
        setStatus={setStatus}
      />
      <ToDoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
