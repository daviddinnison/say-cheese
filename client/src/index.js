import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
// import CheeseList from './components/cheese-list';
import './index.css';
import store from './store'

const cheeses=[
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

ReactDOM.render(
  <Provider>
    <App cheeses={cheeses}/>,
    document.getElementById('root'),
  </Provider>
);
