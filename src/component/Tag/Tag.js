import React from 'react';
import PropTypes from 'prop-types';
import './Tag.sass';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const Tag = ({name, hasX, bold, color, className}) => (
    <div className={classnames("tag", color )}>
        {hasX? <FontAwesomeIcon icon={faTimes}/> : null}
    <span className={bold? "font-weight-bold":""}>{name}</span>
    </div>
)

Tag.propTypes = {
    name: PropTypes.string,
    hasX: PropTypes.bool,
    bold: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string
}

