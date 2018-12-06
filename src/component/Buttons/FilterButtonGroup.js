import React from 'react';
import PropTypes from 'prop-types';
import './FilterButtonGroup.sass';
import classnames from 'classnames';
import { Button, ButtonGroup } from 'reactstrap';
import { NormalButton } from './NormalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPen, faBan, faUsers } from '@fortawesome/free-solid-svg-icons'


export const FilterButtonGroup = ({options, className}) => (
    <ButtonGroup>
        { options.map( (option) => {
            return (
            <NormalButton className={classnames(option.selected?"selected": "", className )}
                label={option.name}/>
        )})}
    </ButtonGroup>
)

FilterButtonGroup.propTypes = {
    options: PropTypes.array
}