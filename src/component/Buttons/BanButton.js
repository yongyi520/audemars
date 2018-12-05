import React from 'react';
import PropTypes from 'prop-types';
import './BanButton.sass';

import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

export const BanButton = ({onClick}) => (
    <Button className="ban-button">
        <FontAwesomeIcon icon={faBan}/>
    </Button>
)

BanButton.propTypes = {
    onClick: PropTypes.func
}