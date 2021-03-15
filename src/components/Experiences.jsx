import React, {Component} from 'react';
import ExperiencesJSON from './component_data/experiences.json';
import Experience from './Experience';
import SectionTitle from './SectionTitle';
import SiteModal from './SiteModal';
import { Row, Col, Image } from 'react-bootstrap';

function ExperienceDisplay(props) {
    let { experienceObj } = props;
    const logosDir = require.context("../media/company_logos", false, /\.svg?/);
    const LogoSvg = logosDir(`./${experienceObj["icon_name"]}`).default
    return <>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <Image src={LogoSvg} className={"modal-img"} fluid/>
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <h2 className={"modal-job-title"}>{experienceObj["job_title"]}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <h4 className={"modal-job-date"}>{experienceObj["date_string"].toUpperCase()}</h4>
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                {experienceObj["description"].split("\n").map((str, i) => <p key={i} className={"modal-job-description"}>{str}</p>)}
            </Col>
        </Row>
        <Row><Col xs={{span: 10, offset: 1}}><h4 className={"modal-title-key-skills"}>Key Skills</h4></Col></Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <ul>
                    {experienceObj["key_skills"].map((skill, i) => <li key={i} className={"modal-skill-item"}>{skill}</li>)}
                </ul>
            </Col>
        </Row>
    </>;
}

class Experiences extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false,
            experienceObj: null
        };
        
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);

        // parse JSON into experience components
        this.experiences = ExperiencesJSON.experiences.map((exp, i) => 
            <Experience experienceObj={exp} key={i} onOpenModal={this.handleModalOpen}/>
        );
    }

    handleModalClose() {
        this.setState({modalOpen: false, experienceObj: null});
    }

    handleModalOpen(expObj) {
        this.setState({modalOpen: true, experienceObj: expObj});
    }

    render() {
        return <div id="experiences-cont">
            <Row>
                <SectionTitle color="white">WHERE I'VE WORKED</SectionTitle>
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
            </Row>
            {
            this.state.modalOpen ? 
                <SiteModal onClose={this.handleModalClose} size={"lg"}>
                    <ExperienceDisplay experienceObj={this.state.experienceObj}/>
                </SiteModal>
                : null
            }
        </div>
    }
}

export default Experiences;