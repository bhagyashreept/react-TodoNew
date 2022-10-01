import React, { useState } from 'react';
import Todo from './Todo.js';

export default function ChildList({ todos, setTodos }) {
  console.log(todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}
