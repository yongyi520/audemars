import React, { Component } from 'react';
import './TeamsTabPane.sass';

import { TabPane } from 'reactstrap';

import { EventAdminsPanel } from '../../../component/Panels/EventAdmins/EventAdminsPanel'
import { InvitersPanel } from '../../../component/Panels/Inviters/InvitersPanel'
import { OnPlacePanel } from '../../../component/Panels/OnPlace/OnPlacePanel'

export class TeamsTabPane extends Component {
    render(){
        return (
            <TabPane tabId="Teams" id="Teams">
                <EventAdminsPanel/>
                <InvitersPanel/>
                <OnPlacePanel/>
            </TabPane>
        )
    }
}