import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MyJourney = () => (
    <Row id={"journey"}>
        <Col xs={{span: 10, offset: 1}}>
            <h2><b>A LITTLE ABOUT ME.</b></h2>
        </Col>
        <Col xs={12} className={"text-area"}>
            <p>
                I'm a software engineer with a passion for learning and a knack for problem solving. 
                Though I began my journey as a music performance major at The State University of New York at Fredonia,
                one simple introductory class in computer science showed me what I'd been missing out on! Since then, I've dedicated myself
                to computer science, software engineering, and building applications with the user's experience (whether that user is a customer or other developer) top of mind.
                During my time at Fredonia I developed my skills as an engineer and introduced myself to some cool areas of CS, such as machine vision and artificial intelligence 
                (see some examples in my projects section <span role="img" aria-label="open mouth smile emoji">&#128515;</span>).
            </p>
            <p>
                My journey has taken me all over the country, from Western New York to Texas and now Baltimore where I work as a Software Engineer at Northrop Grumman developing 
                UI applications for operating and interfacing with an air-based radar. Outside of my work responsibilites, I'm currently pursuing a Masters of Science in
                Computer Science from the Georgia Institute of Technology. In my free time (what little I get,) I enjoy keeping current on the latest development technologies,
                learning new skills in my favorite languages and frameworks, and making silly apps to apply something I've learned or meet a need I've found in the world.
            </p>
        </Col>
    </Row>
);

export default MyJourney;