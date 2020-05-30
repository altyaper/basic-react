import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

const MyComponent = () => {
  return (
    <h1>This is my first component</h1>
  )
};

ReactDOM.render(<MyComponent />, container);