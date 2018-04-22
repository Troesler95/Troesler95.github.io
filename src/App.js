import React, {Component} from 'react';
import MeetMe from './Components/MeetMe';
import AboutMe from './Components/AboutMe';
import MySkills from './Components/MySkills';
import MyExperiences from './Components/MyExperiences';
import MyProjects from './Components/MyProjects';
import Footer from './Components/Footer';

class App extends Component {
    render() {
        return (
            [
                <MeetMe/>,
                <br id="divider" />,
                <AboutMe/>,
                <br id="divider" />,
                <MySkills />,
                <br id="divider" />,
                <MyExperiences />,
                <br id="divider" />,
                <MyProjects />,
                <br id="divider" />,
                <Footer />
            ].map((item, index) => React.cloneElement(item, {key: index})) // satisfy need for key in array of elements
        );
    }
}

export default App;
