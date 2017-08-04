import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import CheeseList from './components/cheese-list';
import './index.css';

const cheeses=[
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

ReactDOM.render(
  <App cheeses={cheeses}/>,
  document.getElementById('root')
);
