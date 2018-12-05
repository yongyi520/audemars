import React, { Component } from 'react';
import './SettingsTabPane.sass';

import { TabPane } from 'reactstrap';

import { GeneralPanel } from '../../../component/Panels/General/GeneralPanel';
import { GuestListsPanel } from '../../../component/Panels/GuestLists/GuestListsPanel'
import { TagsPanel } from '../../../component/Panels/Tags/TagsPanel';
import { EventsPanel } from '../../../component/Panels/Events/EventsPanel';

export class SettingsTabPane extends Component {
    render(){
        return (
            <TabPane tabId="Settings" id="Settings">
                <GeneralPanel/>
                <EventsPanel/>
                <GuestListsPanel/>
                <TagsPanel/>
            </TabPane>
        )
    }
}