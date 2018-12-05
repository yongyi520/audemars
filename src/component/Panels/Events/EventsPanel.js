import React, { Component } from 'react';

import './EventsPanel.sass';

import { SubEventForm } from '../../Forms/SubEventForm';
import { AddButton } from '../../Buttons/AddButton';

export class EventsPanel extends Component {

    render(){
        return (
            <div className="events-panel mb-4">
                <nav className="header flex-row-center justify-content-between">
                    <div className="events-title">Events (2)</div>
                    <AddButton buttonName="Add an event" onClick={() => {}}/>
                </nav>

                <SubEventForm/>

                <SubEventForm/>
            </div>
        )
    }
}