import React from 'react';
import PropTypes from 'prop-types';

/** ContentSection Component
 * This is a basic class to house content
 */
export class ContentSection extends React.Component {
    render() {
        let {className, id, children} = this.props;
        return (
            // add the content-section class to whatever is added at instantiation
            <div className={(className) ? className += ' content-section' : "content-section"}
                id={id}>
                {children}
            </div>
        );
    }
}
ContentSection.propTypes = {
    className: PropTypes.string
};

export default ContentSection;