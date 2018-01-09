import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';

const Experience = ({experienceObj}) => (
    <div className="experience-block">
        <section>
            <h1>{experienceObj.company}</h1>
        </section>
    </div>
);

class MyExperiences extends React.Component {
    getExperienceFromJSON() {

    }
    render() {
        let experienceArr = this.getExperienceFromJSON();
        return (
            <div id="experiences">
                <div id="experience-carousel">

                </div>
            </div>
        );
    }
}

export default MyExperiences;