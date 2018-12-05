import React from 'react';
import PropTypes from 'prop-types';
import './NormalButton.sass';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPen, faBan, faUsers } from '@fortawesome/free-solid-svg-icons'

export const NormalButton = ({label, grey}) => (
    <Button className={classnames("button", grey?"grey":"")}>
        <span>{label}</span>
    </Button>
)

NormalButton.propTypes = {
    label: PropTypes.string,
    grey: PropTypes.bool
}