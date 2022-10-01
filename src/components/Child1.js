import React, { useState } from 'react';

export default function Child1(props) {
  const getNameHandler = (e) => {
    e.preventDefault();
    props.setInputText(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputText('');
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={props.inputText}
          onChange={getNameHandler}
        ></input>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
}
