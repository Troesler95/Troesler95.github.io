import React, {Component} from 'react';
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';
import CarouselArrow from './CarouselArrow';
import ProjectsJSON from './ComponentData/projects.json';

const Project = ({projectObj}) => (
    <div className="project">
        <img src={projectObj["thumbnail-url"]} alt="Project Screenshot"/>
        <p className="project-description">
            {projectObj["name"]}
        </p>
    </div>
);

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
                    <CarouselArrow arrowType={"left"} onClick={() => {}}/>
                    {/*INSERT CONTENT*/}
                    <CarouselArrow arrowType={"right"} onClick={() => {}}/>
                </div>
            </ContentSection>
        );
    }
}

export default MyProjects;