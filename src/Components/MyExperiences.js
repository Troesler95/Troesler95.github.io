import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';
import ExperienceJSON from './ComponentData/experiences.json';

const Experience = ({experienceObj}) => (
    <div className="experience-block">
        <section className="description">
            <h1>{experienceObj["title"]}</h1>
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

class MyExperiences extends React.Component {

    render() {
        return (
            <ContentSection id="experience">
                <ContentHeader headerText={"What I've Done"}
                                smallText={"my building blocks"}
                />
                <div id="experience-carousel">
                    {console.log(Array.isArray(ExperienceJSON))}
                    {ExperienceJSON.map((exp, i) => <Experience experienceObj={exp} key={i} />)}
                </div>
            </ContentSection>
        );
    }
}

export default MyExperiences;