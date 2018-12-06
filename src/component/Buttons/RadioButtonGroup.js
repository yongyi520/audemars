import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtonGroup.sass';

export const RadioButtonGroup = ({data, className}) => (
    <div className="ratio-button-group flex-row-center">
        <div className="radio-group flex-row-center">
            <div className="radio-outline">
                <input type="radio" checked={data.new === true}/>
            </div>
            <span>Yes</span>
        </div>
        <div className="radio-group flex-row-center">
            <div className="radio-outline">
                <input type="radio" checked={data.new === false}/>
            </div>
            <span>No</span>
        </div>
    </div>
)

RadioButtonGroup.propTypes = {
    options: PropTypes.array
}