import React, { useEffect, useState, useCallback } from 'react';
import './Todo.css';
import Card from './Card.js';
import Button from '@mui/material/Button';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  const getNameHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  useEffect(() => {
    onGetClickHandler();
  }, []);

  const onGetClickHandler = useCallback(async () => {
    const response = await fetch(
      'https://react-http-42c1d-default-rtdb.firebaseio.com/todos.json'
    );

    const data = await response.json();

    // const loadedMovies = [];

    for (const key in data) {
      loadedMovies.push({
        id: key,
        text: data[key].text,
        completed: data[key].completed,
      });
    }

    setTodos(loadedMovies);
  }, []);

  //useEffect(()=>{},[])
  async function submitHandler() {
    const currentInputText = {
      text: inputText,
      completed: false,
      id: Math.random() * 1000,
    };
    const response = await fetch(
      'https://react-http-42c1d-default-rtdb.firebaseio.com/todos.json',
      {
        method: 'POST',
        body: JSON.stringify(currentInputText),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    setInputText('');
  }

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
        <Button
          className="AddButton"
          variant="outlined"
          size="small"
          onClick={submitHandler}
        >
          Add
        </Button>
      </div>
    </Card>
  );
};

export default Form;
