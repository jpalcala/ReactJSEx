
/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './css/App.css'

import App from './components/App.jsx';
import Game from './components/Game.jsx';
import Cards from './components/Cards.jsx';

global.jQuery = require('jquery');
require('bootstrap')


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('game'));
ReactDOM.render(<Cards />, document.getElementById('cards'));