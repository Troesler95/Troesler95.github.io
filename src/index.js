import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDesktop, faCloud, faRobot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// add font awesome icons to global library
// allows for slightly more dynaic useage throughout the application
// otherwise we have to pass the objects in instead of strings
library.add(faDesktop, faCloud, faRobot, faTwitter, faGithub, faEnvelope, faLinkedin);

// install the app in the root of our HTML
ReactDOM.render(<App />, document.getElementById('root'));
