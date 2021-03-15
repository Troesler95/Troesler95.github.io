import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Introduction from './components/Introduction';
import MyJourney from './components/MyJourney';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import './stylesheets/App.scss';

class App extends Component {
    render() {
        return <Container fluid>
            <Introduction />
            <MyJourney />
            <Experiences />
            <Skills />
            <Projects />
            <Connect />
        </Container>
    }
}

export default App;