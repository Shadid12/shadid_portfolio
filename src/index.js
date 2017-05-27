import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// components
import App from './App';
import PortFolio from './components/PortFolio';



import './index.css';


ReactDOM.render(
    <App />, 
    document.getElementById('root')
    
    );
registerServiceWorker();