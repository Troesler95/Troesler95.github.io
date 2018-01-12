import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';

const CarousalArrow = ({arrowType, onClick}) => (
    <div className={`arrow-cont arrow-${arrowType} fa-3x vertical-center`} onClick={onClick}>
        <FontAwesomeIcon icon={
            (arrowType.toLowerCase() === "left") ? faAngleLeft
                : (arrowType.toLowerCase() === "right") ? faAngleRight
                : null}/>
    </div>
);

CarousalArrow.propTypes = {
    arrowType: (function (props) {
        if(props.arrowType.toLowerCase() === "left"
            || props.arrowType.toLowerCase() === "right") {
            return null;
        } else {
            return new Error("CarousalArrow: ERROR. arrowType should be one of either "
            + "left or right");
        }
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default CarousalArrow;