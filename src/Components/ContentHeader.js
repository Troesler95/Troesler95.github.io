import React from 'react';
import PropTypes from 'prop-types';

const ContentHeader = ({headerText, smallText, children}) => (
    <div className="content-header-cont">
        <h1 className="content-header">
            {headerText.toUpperCase()}
        </h1>
        <small>{'(' + smallText.toLowerCase() + ')'}</small>
        {children}
    </div>
);

ContentHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
    smallText: PropTypes.string
};

export default ContentHeader;