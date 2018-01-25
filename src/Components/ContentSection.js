import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';

/** ContentSection Component
 * This is a basic class to house content
 * Uses Bootstrap's 'container-fluid' to support grid usage!
 */
export class ContentSection extends Component {
    render() {
        let {className, id, children} = this.props;
        return (
            // add the content-section class to whatever is added at instantiation
            <div className={(className) ? className += ' content-section container-fluid' : "content-section"}
                id={id}>
                {children}
            </div>
        );
    }
}

ContentSection.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired, // each instantiation should be unique
};

export default ContentSection;