import React, { useState } from 'react';
import './Todo.css';
import Card from './Card.js';

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  const getNameHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    setInputText('');
  };

  return (
    <Card>
      <div>
        <input
          className="textCss"
          type="text"
          value={inputText}
          onChange={getNameHandler}
        ></input>
      </div>
      <div>
        <button className="AddButton" onClick={submitHandler}>
          Add
        </button>
      </div>
    </Card>
  );
};

export default Form;
