import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

// HERE
import './stylesheets/styles.scss';

const MyComponent = () => {
  return (
    <div className='wrapper'>
      <h1>This is my first component</h1>
    </div>
  )
};

ReactDOM.render(<MyComponent />, container);