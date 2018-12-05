import React from 'react';
import PropTypes from 'prop-types';
import './EditButton.sass';

import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export const EditButton = ({onClick}) => (
    <Button className="edit-button">
        <FontAwesomeIcon icon={faPen}/>
    </Button>
)

EditButton.propTypes = {
    onClick: PropTypes.func
}