import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtonGroup.sass';
import classnames from 'classnames';
import { Input, FormGroup, Label } from 'reactstrap';
import { NormalButton } from './NormalButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPen, faBan, faUsers } from '@fortawesome/free-solid-svg-icons'


export const RadioButtonGroup = ({data, className}) => (
    <div className="ratio-button-group flex-row-center">
        <div className="radio-group flex-row-center">
            <div className="radio-outline">
                <input type="radio" checked={data.new == true}/>
            </div>
            <span>Yes</span>
        </div>
        <div className="radio-group flex-row-center">
            <div className="radio-outline">
                <input type="radio" checked={data.new == false}/>
            </div>
            <span>No</span>
        </div>
    </div>
)

RadioButtonGroup.propTypes = {
    options: PropTypes.array
}