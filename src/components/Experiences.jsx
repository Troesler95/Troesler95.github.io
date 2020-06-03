import React, {Component} from 'react';
import ExperiencesJSON from './component_data/experiences.json'
import Experience from './Experience';

class Experiences extends Component {
    constructor(props) {
        super(props)
        
        // parse JSON into experience components
        this.experiences = ExperiencesJSON.experiences.map(
            (exp, i) => <Experience experienceObj={exp} key={i} />
            )
    }

    render() {
        return <div className="experiences-cont">
            {this.experiences}
        </div>
    }
}

export default Experiences;