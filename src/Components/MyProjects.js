import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';
import CarouselArrow from './CarouselArrow';
import Modal from './Modal';
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
        var thumbName = projectObj["thumbnail-filename"]; // using var for scoping reasons

        return (
            <div className="project" onClick={this.clickHandler}>
                <div className="project-top">
                    <img src={(thumbName === "") ? thumbName : projIms(`./${thumbName}`, true)}
                         alt="Project Screenshot"/>
                </div>
                <div className="project-bottom">
                    <p className="project-description">
                        {projectObj["name"]}
                    </p>
                </div>
            </div>
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
        //this.openModal = this.openModal.bind(this);
        //set up initial state
        this.state = {
            projects: ProjectsJSON.map((proj, i) => <Project projectObj={proj} key={i}
                                                             onProjectClick={this.openModal.bind(this, proj)} />),
            currentProject: 1, // <- left most project (I think?)
            modalComponent: null, // current modal to be displayed when user selects a project
            modalOpen: false
        };
    }
    openModal(obj) {
        if (this.state.modalOpen) {
            return new Error("MyProjects ERROR: openModal() called while modal is already considered to be open!");
        } else {
            this.setState({
                modalComponent: <Modal projObj={obj}/>,
                modalOpen: true
            });
        }
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
                    {projects}
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
