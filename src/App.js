import React, { useState } from 'react';
import Child1 from './components/Child1.js';
import ChildList from './components/ChildList.js';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(['']);
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
    <div>
      <Child1
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      ></Child1>
      <ChildList todos={todos} setTodos={setTodos} />
    </div>
  );
}
