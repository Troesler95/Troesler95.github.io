import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';
import CarouselArrow from './CarouselArrow';
import ProjectModal from './Modal'; // TODO: replace with bootstrap Modal
import Image from 'react-bootstrap/lib/Image';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ProjectsJSON from './ComponentData/projects.json';

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.props.onProjectClick(this.props.projectObj);
    };
    render() {
        const {projectObj} = this.props;
        // dynamically load images from the projectThumbnails
        const projIms = require.context("../media/projectThumbnails", false, /\.jpe?g$/);
        //var thumbName = projectObj["thumbnail-filename"]; // using var for scoping reasons
        var thumbName = projectObj["full-filename"];

        return (
            <Col md={3}>
                <div className="project" onClick={this.clickHandler}>
                    <div className="project-top">
                        <Image src={(thumbName === "") ? thumbName : projIms(`./${thumbName}`, true)}
                            alt="Coming soon!" responsive rounded />
                    </div>
                    <div className="project-bottom">
                        <p className="project-description">
                            {projectObj["name"]}
                        </p>
                    </div>
                </div>
            </Col>
        );
    }
}

Project.propTypes = {
    projectObj: PropTypes.object.isRequired,
    onProjectClick: PropTypes.func
};

export default class MyProjects extends Component {

    constructor(props) {
        super(props);
        
        //set up initial state
        this.state = {
            projects: [],
            currentProject: 1,
            modalComponent: null,
            modalOpen: false
        }
        this.closeModal = this.closeModal.bind(this);
    }
    async getProjectsAsync() {
        return ProjectsJSON.map(
            (proj, i) => <Project projectObj={proj} key={i}
                            onProjectClick={this.openModal.bind(this, proj)} />);
    }
    openModal(obj) {
        if (this.state.modalOpen) {
            return new Error("MyProjects ERROR: openModal() called while modal is already considered to be open!");
        } else {
            this.setState({
                modalComponent: <ProjectModal projObj={obj} closeParent={this.closeModal}/>,
                modalOpen: true
            });
        }
    }
    closeModal() {
        this.setState({
            modalComponent: null,
            modalOpen: false
        });
    }
    componentDidMount() {
        this.getProjectsAsync().then(projects => {
            this.setState({projects: projects});
        })
    }
    render() {
        const {currentProject, projects, modalOpen, modalComponent} = this.state;
        return (
            <ContentSection id="projects">
                <ContentHeader headerText={"What I've been up to"}
                                smallText={"click to learn more!"}/>
                <div id="project-carousel" className="carousel-cont">
                    {
                        /*If the projects are at the beginning, hide the left arrow*/
                        (currentProject !== 1)
                            ? <CarouselArrow arrowType={"left"} onClick={() => {}}/> : null
                    }
                    {/*Display all the projects in state*/}
                    <Row>
                        {(projects.length === 0) ? "" : projects}
                    </Row>
                    {
                        /*If the projects have reached the end, hide the right arrow*/
                        (currentProject < projects.length - 3)
                            ? <CarouselArrow arrowType={"right"} onClick={() => {}}/> : null
                    }
                </div>
                {(modalOpen) ? modalComponent : null}
            </ContentSection>
        );
    }
}
