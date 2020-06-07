import React, {Component} from 'react';
import ExperiencesJSON from './component_data/experiences.json';
import Experience from './Experience';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Experiences extends Component {
    constructor(props) {
        super(props)
        
        // parse JSON into experience components
        this.experiences = ExperiencesJSON.experiences.map(
            (exp, i) => <Experience experienceObj={exp} key={i} />
            )
    }

    render() {
        return <div id="experiences-cont">
            <Row>
                <Col xs={{span: 10, offset: 1}}>
                    <h2><b>WHERE I'VE WORKED.</b></h2>
                </Col>
            </Row>
            <Row>
                {this.experiences.map((exp, i) => {
                    return (<Col xs={{span: 10, offset: 1}} sm={{span: 8, offset: 2}} md={{span:3, offset: 0}}key={i} className={"d-flex align-items-stretch"}>
                        {React.cloneElement(exp, {key: i})}
                    </Col>)
                })}
            </Row>
        </div>
    }
}

export default Experiences;