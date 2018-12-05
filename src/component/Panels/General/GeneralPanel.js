import React, { Component } from 'react';

import './GeneralPanel.sass';

import { GeneralEventForm } from '../../Forms/GeneralEventForm';

export class GeneralPanel extends Component {
    
    render(){
        return (
            <div className="general-panel mb-4">
                <nav className="header flex-row-center">
                    <div className="general-title">General</div>
                </nav>
                <GeneralEventForm/>
            </div>
        )
    }
}