import React, { useState } from 'react';
import './Todo.css';

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
    <>
      <div>
        <input type="text" className="textCss" value={inputText} onChange={getNameHandler}></input>
        <button className="AddButton" onClick={submitHandler}>
          Add
        </button>
      </div>
    </>
  );
};

export default Form;
