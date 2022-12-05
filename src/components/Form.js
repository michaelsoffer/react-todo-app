import React, { useEffect } from 'react';
import { collection, addDoc, getCountFromServer } from "firebase/firestore";
import {db} from '../firebase';

// form component 
const Form = ({setTextInput, todos, setTodos, textInput, setStatus, totalTasks, setTotalTasks}) => {
    // JS
    useEffect(() => {
        renderTaskCount();
    }, [todos]);

    // updates textInput state to the user input
    const textInputHandler = (e) => {
        setTextInput(e.target.value);   // pass text input to setInputText function
    }
    
    const addTodo = async (e) => {
        e.preventDefault();
       
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                todo: textInput,
            });
            console.log("Document written with ID: ", docRef.id);
            setTodos([...todos, { text: textInput, completed: false, id: Math.random() * 100 }]);
            setTextInput("");   // reset todo input
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // updates status in state
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    const renderTaskCount = async () => {
        const coll = collection(db, "todos");
        const snapshot = await getCountFromServer(coll);
        setTotalTasks(snapshot.data().count);
    }

    // HTML
    return (
        <form>
            <input value={textInput} onChange={textInputHandler} type="text" className="todo-input" />
            <button onClick={addTodo} className="todo-button" type="submit">
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