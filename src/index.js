import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';

// We wrap app in Router so that child components can receive specific Router props
ReactDOM.render(<Router> <App /> </Router>, document.getElementById('root'));


