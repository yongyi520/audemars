import React from 'react';
import PropTypes from 'prop-types';
import './FilterButtonGroup.sass';
import classnames from 'classnames';
import { ButtonGroup } from 'reactstrap';
import { NormalButton } from './NormalButton';

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