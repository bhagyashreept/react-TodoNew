import React from 'react';
import './Todo.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Button from '@mui/material/Button';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';

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
          <Button
            className="deleteButton"
            variant="outlined"
            color="error"
            size="small"
            onClick={DeleteHandler}
          >
            delete
            <i></i>
          </Button>

          <Button
            className="checkButton"
            variant="outlined"
            color="success"
            size="small"
            onClick={checkHandler}
          >
            check
            <i></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
