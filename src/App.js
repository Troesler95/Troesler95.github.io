import React, { Component } from 'react';
import ContentSection from './Components/ContentSection';
//import Logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <ContentSection className="content-section meet-me">
            <h1>
                Hello, I'm Tyler Roesler
                <small>software developer | technology enthusiast | coffee lover</small>
            </h1>
            {/*TODO: Replace this with react-router Link!*/}
            <h4><a>learn more</a></h4>
        </ContentSection>
    );
  }
}

export default App;
