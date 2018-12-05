import React from 'react';
import PropTypes from 'prop-types';
import './GuestListsPanel.sass';

import { AddButton } from '../../Buttons/AddButton';
import { GuestListsTable } from '../../Tables/GuestListsTable/GuestListsTable';

export const GuestListsPanel = ({guestLists}) => (
    <div className="guest-lists-panel mb-4">
        <nav className="header flex-row-center">
            <div className="guests-title">Guest Lists</div>
            <AddButton buttonName="Add a list" onClick={() => {}}/>
        </nav>
        <GuestListsTable/>
    </div>
)

GuestListsPanel.propTypes = {
    guestLists: PropTypes.object
}