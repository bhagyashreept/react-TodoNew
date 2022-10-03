import React, { useState } from 'react';
import Form from './components/Form.js';
import ChildList from './components/ChildList.js';
import './components/Todo.css';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const getNameFromChild1 = (getName) => {
    // setNames((prevNames) => {
    //   const updatedNames = [...prevNames];
    //   updatedNames.unshift({ text: getName, id: Math.random().toString() });
    //   return updatedNames;
    // });
    setInputText(getName);
    // console.log(getName);
  };
  return (
    <div className="MainDiv">
      <h4 className="headerText">TO-DO..</h4>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      ></Form>
      <ChildList todos={todos} setTodos={setTodos} />
    </div>
  );
}
