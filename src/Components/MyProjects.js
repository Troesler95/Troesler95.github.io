import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';
import CarouselArrow from './CarouselArrow';
import ProjectsJSON from './ComponentData/projects.json';

const Project = ({projectObj}) => (
    <div className="project">
        <div className="project-top">
            <img src={projectObj["thumbnail-url"]} alt="Project Screenshot"/>
        </div>
        <div className="project-bottom">
            <p className="project-description">
                {projectObj["name"]}
            </p>
        </div>
    </div>
);

Project.propTypes = {
    projectObj: PropTypes.object.isRequired
};

class MyProjects extends Component {
    constructor(props) {
        super(props);

        //set up initial state
        this.state = {
            projects: ProjectsJSON.map((proj, i) => <Project projectObj={proj} key={i} />),
            currentProject: 1 // <- left most project (I think?)
        }
    }
    render() {
        return (
            <ContentSection id="projects">
                <ContentHeader headerText={"What I've been up to"}
                                smallText={"always busy!"}/>
                <div id="project-carousel" className="carousel-cont">
                    {/*Need to figure out carousel logic with several items.
                      * Hide left arrow when at beginning? */}
                    <CarouselArrow arrowType={"left"} onClick={() => {}}/>
                    {this.state.projects.forEach((proj, i) => <Project projectObj={proj} key={i}/>)}
                    <CarouselArrow arrowType={"right"} onClick={() => {}}/>
                </div>
            </ContentSection>
        );
    }
}

export default MyProjects;