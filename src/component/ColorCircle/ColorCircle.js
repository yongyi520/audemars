import React from 'react';
import PropTypes from 'prop-types';
import './ColorCircle.sass';
import classnames from 'classnames';

// import react-color for manual color inputs! 

export const ColorCircle = ({color}) => (
    <div className={classnames("color-circle")} style={{backgroundColor: color}}>

    </div>
)

ColorCircle.propTypes = {
    color: PropTypes.string.isRequired
}

