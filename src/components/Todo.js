import React from 'react';
import './Todo.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Todo = ({ text, todo, setTodos, todos }) => {
  async function DeleteHandler() {
    console.log('in deletehandler todos');
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log('After set todos');
    const response = await fetch(
      `https://react-http-42c1d.firebaseio.com/todos.json/${todo.id}.json`,
      {
        method: 'DELETE',
      }
    );
    console.log('After response todos', response);
  }

  const checkHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="eachItem">
      <div className="eachItem-children">
        <div className="eachItem-text">
          <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {text}
          </li>
        </div>
        <div className="eachItem-btn-flexend">
          <button className="deleteButton" onClick={DeleteHandler}>
            delete
            <i></i>
          </button>

          <button className="checkButton" onClick={checkHandler}>
            check
            <i></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
