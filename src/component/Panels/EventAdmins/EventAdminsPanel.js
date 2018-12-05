import React from 'react';
import PropTypes from 'prop-types';
import './EventAdminsPanel.sass';

import { AddButton } from '../../Buttons/AddButton';
import { EventAdminsTable } from '../../Tables/EventAdminsTable/EventAdminsTable';

export const EventAdminsPanel = ({eventAdmins}) => (
    <div className="event-admins-panel mb-4">
        <nav className="header flex-row-center">
            <div className="event-admins-title">Event Admins <span className="sub-title">(1 Person)</span></div>
            <AddButton buttonName="Add an admin" onClick={() => {}}/>
        </nav>
        <EventAdminsTable/>
    </div>
)

EventAdminsPanel.propTypes = {
    eventAdmins: PropTypes.object
}