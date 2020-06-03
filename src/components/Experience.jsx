import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {experienceObj} = this.props;
        const logosDir = require.context("../media/company_logos", false, /\.svg?/);
        const LogoSvg = logosDir(`./${experienceObj["icon_loc"]}`).default

        return (
            <div className={"experience-block"}>
                <LogoSvg className={"logo"}/>
                <h4>{experienceObj["company"]}</h4>
                <p>{experienceObj["date_string"].toUpperCase()}</p>
                <Button variant="primary">LEARN MORE</Button>
            </div>
        )
    }
}

Experience.propTypes = {
    experienceObj: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default Experience;