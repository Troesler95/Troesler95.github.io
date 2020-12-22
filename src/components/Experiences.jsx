import React, {Component} from 'react';
import ExperiencesJSON from './component_data/experiences.json';
import Experience from './Experience';
import SectionTitle from './SectionTitle';
import { Row, Col } from 'react-bootstrap';

class Experiences extends Component {
    constructor(props) {
        super(props)
        
        // parse JSON into experience components
        this.experiences = ExperiencesJSON.experiences.map((exp, i) => 
            <Experience experienceObj={exp} key={i} />
        );
    }

    render() {
        return <div id="experiences-cont">
            <Row>
                <SectionTitle color="white">WHERE I'VE WORKED.</SectionTitle>
            </Row>
            <Row>
                <Col md={{span: 10, offset: 1}}>
                    <Row>
                        {this.experiences.map((exp, i) => {
                            return <>
                                {i % 2 != 0 ? null : <div className={"w-100 d-none d-sm-block d-md-none"} />}
                                <Col xs={{span: 10, offset: 1}} 
                                     sm={{span: 5, offset: (i % 2 == 0 ? 1 : 0)}} 
                                     md={{span: 3, offset: 0}} key={i} 
                                     className={"d-flex align-items-stretch"}>
                                    {React.cloneElement(exp, {key: i})}
                                </Col>
                            </>
                        })}
                    </Row>
                </Col>
                {/* TODO: Lift state up to here, and display modal outside of column */}
            </Row>
        </div>
    }
}

export default Experiences;