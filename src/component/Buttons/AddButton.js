import React from 'react';
import PropTypes from 'prop-types';
import './AddButton.sass';
import { Button } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AddButton = ({buttonName, onClick, short}) => (
    <Button outline className={classnames("outline-highlight font-weight-bold", short? "short": "")} onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} size="1x"/>
        <span>{buttonName}</span>
    </Button>
)
  
AddButton.proptypes = {
    buttonName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    short: PropTypes.bool
}

