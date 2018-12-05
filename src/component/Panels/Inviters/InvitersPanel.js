import React from 'react';
import PropTypes from 'prop-types';
import './InvitersPanel.sass';

import { AddButton } from '../../Buttons/AddButton';
import { InvitersTable } from '../../Tables/InvitersTable/InvitersTable';

export const InvitersPanel = ({inviters}) => (
    <div className="inviters-panel mb-4">
        <nav className="header flex-row-center">
            <div className="inviters-title">Event Admins <span className="sub-title">(2 People)</span></div>
            <AddButton buttonName="Add an inviter" onClick={() => {}}/>
        </nav>
        <InvitersTable/>
    </div>
)

InvitersPanel.propTypes = {
    inviters: PropTypes.object
}