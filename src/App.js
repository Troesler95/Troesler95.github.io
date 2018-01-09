import React, { Component } from 'react';
import MeetMe from './Components/MeetMe';
import AboutMe from './Components/AboutMe';
import MySkills from './Components/MySkills';
import MyExperiences from './Components/MyExperiences';
import MyProjects from './Components/MyProjects';

class App extends Component {
  render() {
    return (
        <div>
            <MeetMe/>
            <br id="divider" />
            <AboutMe/>
            <br id="divider" />
            <MySkills />
            <br id="divider" />
            <MyExperiences />
            <br id="divider" />
            <MyProjects />
        </div>
    );
  }
}

export default App;
