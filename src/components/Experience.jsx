import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {experienceObj} = this.props;
        const logosDir = require.context("../media/company_logos", false, /\.svg?/);
        const LogoSvg = logosDir(`./${experienceObj["icon_name"]}`).default
        
        return (
            <Card className={"text-center experience-card"}>
                <Card.Img variant="top" src={LogoSvg} className={"logo"} />
                <Card.Body>
                    <Card.Title className={"align-middle"}>{experienceObj["job_title"]}</Card.Title>
                    <Card.Text>{experienceObj["date_string"].toUpperCase()}</Card.Text>
                    <Button variant="primary">LEARN MORE</Button>
                </Card.Body>
            </Card>
        )
    }
}

Experience.propTypes = {
    experienceObj: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default Experience;