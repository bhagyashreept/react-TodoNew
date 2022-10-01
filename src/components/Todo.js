import React from 'react';

const Todo = ({ text, todo, setTodos, todos }) => {
  const DeleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div>
      <li>{text}</li>
      <button onClick={DeleteHandler}>
        delete
        <i></i>
      </button>
      <button>
        check
        <i></i>
      </button>
    </div>
  );
};

export default Todo;
