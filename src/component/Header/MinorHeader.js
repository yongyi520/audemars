import React from 'react';
import PropTypes from 'prop-types';

import './MinorHeader.sass';

export const MinorHeader = ({eventStartTime}) => (
    <div className="d-flex flex-row justify-content-between align-items-center">
        <span>26.10.2018 18:00 - 22:00 local time in 2 hours from now</span>
    </div>
)
MinorHeader.propTypes = {
    eventStartTime: PropTypes.object
}