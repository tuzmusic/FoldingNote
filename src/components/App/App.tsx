import React, { ChangeEvent, useState } from 'react';
import './App.css';
import Content from "../Content/Content";

const App = () => {
  const [text, setText] = useState('# a heading to start');
  
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  };
  
  return (
    <div>
      <h1>Markdown</h1>
      <textarea value={ text } onChange={ onChange }/>
      <Content text={ text }/>
    </div>
  );
};

export default App;
