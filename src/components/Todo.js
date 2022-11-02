import React from 'react';
import './Todo.css';
const Todo = ({ text, todo, setTodos, todos }) => {
  async function DeleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
    const response = await fetch(
      'https://react-http-42c1d-default-rtdb.firebaseio.com/todos.json',
      {
        method: 'DELETE',
      }
    );
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
