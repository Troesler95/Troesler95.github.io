import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentSection from './ContentSection';
import ContentHeader from './ContentHeader';

const SkillsSection = ({head, contentArray, className}) => (
    <div className={(typeof className !== "undefined") ? className + " skills-section" : "skills-section"}>
        <h4>{head}</h4>
        {contentArray.map((entry, i) => <p key={i}>{entry}</p>)}
    </div>
);


SkillsSection.propTypes = {
    head: PropTypes.string.isRequired,
    contentArray: function(props) {
        if(!Array.isArray(props.contentArray)) {
            return new Error(
                "SkillsSection takes an array for contentArray"
            );
        } else if (!props.contentArray.length) {
            return new Error(
                "SkillsSection's contentArray must contain at least one entry"
            );
        } else {
            return null;
        }
    }
};

const MySkills = () => (
    <ContentSection id="skills">
        <ContentHeader headerText="My Weapons of Choice"
                        smallText="besides coffee"/>
        <div id="skills-cont">
            <SkillsSection head="Languages"
                           contentArray={[
                                "C/C++",
                                "C#.NET",
                                "Pyton",
                                "MATLAB",
                                "Ruby"
                           ]}
            />
            <SkillsSection head="Web"
                           contentArray={[
                                "HTML5",
                                "CSS/SCSS",
                                "JavaScript",
                                "Ruby on Rails",
                                "PHP",
                                "SQL"]}
            />
            <SkillsSection head="Development Technologies"
                           contentArray={[
                               "Git/GitHub",
                               "WPF and UWP",
                               "React.Js",
                               "Microsoft Visual Studio",
                               "Jetbrains IDEs"
                           ]}
            />
            <SkillsSection head="Concepts"
                           contentArray={[
                               "OOP",
                               "Software architectures",
                               "Software development processes",
                               "Multi-threaded programming",
                               "UI and UX design principles",
                               "AI and machine learning"
                            ]}
            />
        </div>
    </ContentSection>
);

export default MySkills;