import React, {Component} from 'react'
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';
import CarouselArrow from './CarouselArrow';
import ExperienceJSON from './ComponentData/experiences.json';
import ResumePDF from '../media/resume/TylerRoesler_Resume.pdf';

const Experience = ({experienceObj}) => (
    <div className="experience-block">
        <section className="description">
            <h1>{experienceObj["title"].toUpperCase()}</h1>
            <p className="company-name">
                {experienceObj["company"]}
            </p>
            <p className="location">
                {experienceObj["location"]}
            </p>
            <p className="duration">
                {experienceObj["duration"]}
            </p>
        </section>
        <section className="bullet-points">
            <ul>
                {experienceObj["bullet-points"].map((point, i) => <li className="bullet" key={i}>{point}</li>)}
            </ul>
        </section>
    </div>
);

class MyExperiences extends Component {
    constructor(props) {
        super(props);
        // set state object
        this.state = {
            experiences: ExperienceJSON.map((exp, i) => <Experience experienceObj={exp} key={i}/>),
            currentExpNum: 1
        };

        this.nextExperience = this.nextExperience.bind(this);
        this.previousExperience = this.previousExperience.bind(this);
    }
    nextExperience() {
        this.setState({
            currentExpNum: (this.state.currentExpNum !== this.state.experiences.length)
                ? this.state.currentExpNum += 1 : this.state.currentExpNum = 1
        });
    }
    previousExperience() {
        this.setState({
            currentExpNum: (1 === this.state.currentExpNum)
                ? this.state.currentExpNum = this.state.experiences.length : this.state.currentExpNum -= 1
        });
    }
    render() {
        return (
            <ContentSection id="experience">
                <ContentHeader headerText={"What I've Done"}
                                smallText={"my building blocks"}>
                    <a href={ResumePDF} download="TylerRoesler_Resume.pdf" target="_self">
                        <button className="resume-btn ghost-btn">
                            DOWNLOAD<br />
                            FULL RESUME
                        </button>
                    </a>
                </ContentHeader>
                <div id="experience-carousel" className="carousel-cont">
                    <CarouselArrow arrowType="left" onClick={this.previousExperience}/>
                    {this.state.experiences[this.state.currentExpNum - 1]}
                    <CarouselArrow arrowType="right" onClick={this.nextExperience}/>
                </div>
            </ContentSection>
        );
    }
}

export default MyExperiences;