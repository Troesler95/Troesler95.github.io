import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';

const CarousalArrow = ({arrowType, onClick}) => (
    <div className={`arrow-cont arrow-${arrowType} fa-3x vertical-center`} onClick={onClick}>
        <FontAwesomeIcon icon={
            (arrowType.toLowerCase() === "left") ? faAngleLeft
                : (arrowType.toLowerCase() === "right") ? faAngleRight
                : null}/>
    </div>
);

CarousalArrow.propTypes = {
    arrowType: PropTypes.oneOf(["left", "right"]).isRequired,
    onClick: PropTypes.func.isRequired
};

export default CarousalArrow;