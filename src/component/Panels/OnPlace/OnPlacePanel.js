import React from 'react';
import PropTypes from 'prop-types';
import './OnPlacePanel.sass';
import { AddButton } from '../../Buttons/AddButton'
import { EditButton } from '../../Buttons/EditButton';
import { BanButton } from '../../Buttons/BanButton';

import { OnPlaceTable } from '../../Tables/OnPlaceTable/OnPlaceTable';

export const OnPlacePanel = ({mainEntraceTeam, insideTeam}) => (
    <div className="on-place-panel mb-4">
        <nav className="header flex-row-center">
            <div className="on-place-title">On place <span className="sub-title">(2 teams, 15 people)</span></div>
            <AddButton buttonName="Add a team" onClick={() => {}}/>
        </nav>
        <div className="on-place-sub-panel">
            <nav className="sub-panel-header flex-row-center justify-content-between">
                <div className="flex-row-center">
                    <span className="sub-panel-title">Main Entrance</span>
                    <EditButton/>
                    <BanButton/>
                </div>
                <AddButton buttonName="Add an person" onClick={() => {}} short/>
            </nav>
            <OnPlaceTable/>
        </div>
        <div className="on-place-sub-panel">
            <nav className="sub-panel-header flex-row-center justify-content-between">
                <div className="flex-row-center">
                    <span className="sub-panel-title">Inside</span>
                    <EditButton/>
                    <BanButton/>
                </div>
                <AddButton buttonName="Add an person" onClick={() => {}} short/>
            </nav>
            <OnPlaceTable/>
        </div>
        
    </div>
)

OnPlacePanel.propTypes = {
    mainEntraceTeam: PropTypes.object,
    insideTeam: PropTypes.object
}