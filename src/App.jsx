import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Introduction from './components/Introduction';
import MyJourney from './components/MyJourney';
import Experiences from './components/Experiences';
import './stylesheets/App.scss'

class App extends Component {
    render() {
        return <Container fluid>
            <Introduction />
            <MyJourney />
            <Experiences />
        </Container>
    }
}

export default App;