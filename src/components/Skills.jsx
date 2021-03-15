import React, {Component} from 'react';
import SkillsJSON from './component_data/skills.json';
import SectionTitle from './SectionTitle';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    createSkillFromJSON(sectionName) {
        return <div className="skill-section">
            <FontAwesomeIcon icon={SkillsJSON[sectionName]["icon_name"]} size="6x"/>
            <h4 className="text-center"><b>{SkillsJSON[sectionName]["title"]}</b></h4>
            <ul>
                {SkillsJSON[sectionName]["skills"].map((skill, i) =>
                    <li key={i}>{skill}</li>
                )}
            </ul>
        </div>
    }

    render() {
        return <Row id="skills">
            <SectionTitle>WHAT I BRING</SectionTitle>
            {/* Spacing on desktop */}
            <Col md={{span: 10, offset: 1}}>
                <Row>
                    <Col xs={{span: 10, offset: 1}} md={{span: 4, offset:0}}>
                    {this.createSkillFromJSON("desktop")}
                    </Col>
                    <Col xs={{span: 10, offset: 1}} md={{span: 4, offset:0}}>
                    {this.createSkillFromJSON("cloud")}
                    </Col>
                    <Col xs={{span: 10, offset: 1}} md={{span: 4, offset:0}}>
                    {this.createSkillFromJSON("ai")}
                    </Col>
                </Row>
            </Col>
        </Row>
    }
}

export default Skills;