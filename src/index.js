import React from 'react';
import ReactDOM from 'react-dom';
import './media/starry-night.jpeg';
import './media/wood-deck.jpeg';
import './stylesheets/App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
