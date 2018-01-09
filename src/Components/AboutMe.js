import React from 'react';
import ContentSection from './ContentSection';

const AboutMe = () => (
    <ContentSection id="about-me">
        {/*For positioning text and space*/}
        <div className="about-cont">
            <b>
                <h1>
                    I'm a support engineer for Microsoft in Irving, TX with
                    a unique passion for learning and exploring.
                </h1>
            </b>

            <h1>
                I recently finished my Bachelors in Computer Science at the
                State University of New York at Fredonia. It was there that I discovered
                my love for the field! I received a breadth of coursework ranging from
                web programming to machine learning and artificial intelligence. My career goals
                are oriented around developing cutting-edge products that change and empower people's lives.
            </h1>

            <h1>
                I thoroughly enjoy the process of learning and growing both as a developer and person;
                and I love sharing those experiences too! Be sure to check out <a>my blog</a> to
                keep up with what I've been up to.
            </h1>
        </div>
    </ContentSection>
);

export default AboutMe;