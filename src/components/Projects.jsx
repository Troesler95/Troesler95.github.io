import React, {Component} from 'react';
import ProjectsJSON from './component_data/projects.json';
import Project from './Project';
import SectionTitle from './SectionTitle';
import SiteModal from './SiteModal';
import { Row, Col, Image } from 'react-bootstrap';

function ProjectDisplay(props) {
    let { projectObj } = props;
    const logosDir = require.context("../media/project_thumbnails", false, /\.(jpe?g|png|svg)?/);
    const LogoSvg = logosDir(`./${projectObj["full-filename"]}`).default;
    return <>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <Image src={LogoSvg} className="modal-img" fluid />
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <h2 className={"modal-job-title"}>{projectObj["name"]}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                {projectObj["description"].split("\n").map((str, i) => <p key={i} className={"modal-job-description"}>{str}</p>)}
            </Col>
        </Row>
        <Row><Col xs={{span: 10, offset: 1}}><h4 className={"modal-title-key-skills"}>Key Skills</h4></Col></Row>
        <Row>
            <Col xs={{span: 10, offset: 1}}>
                <ul>
                    {projectObj["skills"].map((skill, i) => <li key={i} className={"modal-skill-item"}>{skill}</li>)}
                </ul>
            </Col>
        </Row>
    </>;
}

// TODO: figure out how to repeat less code between this and experiences
class Projects extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            modalOpen: false,
            projectObj: null
        };

        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);

        // parse JSON into experience components
        this.projects = ProjectsJSON.projects.map((exp, i) => 
            <Project projectObj={exp} key={i} onOpenModal={this.handleOpenModal}/>
        );
    }

    handleModalClose() {
        this.setState({modalOpen: false, projectObj: null});
    }

    handleOpenModal(projObj) {
        this.setState({modalOpen: true, projectObj: projObj});
    }

    render() {
        return <div id="projects">
            <Row>
                <SectionTitle color="white">WHAT I'M UP TO</SectionTitle>
            </Row>
            <Row>
                <Col md={{span: 10, offset: 1}}>
                    <Row>
                        {this.projects.map((proj, i) => {
                            return <>
                                {i % 2 != 0 ? null : <div className={"w-100 d-none d-sm-block d-md-none"} />}
                                <Col xs={{span: 10, offset: 1}} 
                                     sm={{span: 5, offset: (i % 2 == 0 ? 1 : 0)}} 
                                     md={{span: 3, offset: 0}} key={i} 
                                     className={"d-flex align-items-stretch"}>
                                    {React.cloneElement(proj, {key: i})}
                                </Col>
                            </>
                        })}
                    </Row>
                </Col>
            </Row>
            {
            this.state.modalOpen ? 
                <SiteModal onClose={this.handleModalClose} size={"lg"}>
                    <ProjectDisplay projectObj={this.state.projectObj}/>
                </SiteModal>
                : null
            }
        </div>
    }
}

export default Projects;