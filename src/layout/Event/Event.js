import React, { Component } from 'react';
import './Event.sass';
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import { Header } from '../../component/Header/Header';

import { OverviewTabPane } from './OverviewTabPane/OverviewTabPane';
import { GuestsTabPane } from './GuestsTabPane/GuestsTabPane';
import { TeamsTabPane } from './TeamsTabPane/TeamsTabPane';
import { SettingsTabPane } from './SettingsTabPane/SettingsTabPane';
import { ValidationTabPane } from './ValidationTabPane/ValidationTabPane';

class Event extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: 'Validation'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render(){
        const eventData = {
            _id: "a",
            admins: [
                {
                    _id: "1",
                    firstname: "James",
                    lastname: "Dean",
                    url: null
                }
            ],
            privateName: "C2019 New York Presentation",
            guests: {
                invited: 100,
                confirmed: 82
            },
            date: new Date()
        }

        const tabNames = ["Overview", "Guests", "Teams", "Settings", "Validation"]

        return (
            <div id="Event">
                <Header event={eventData}/>
                <div className="container-fluid mt-2 mb-3 pt-1">
                    <Nav tabs>
                        { tabNames.map((tabName) => (
                            <NavItem className="mr-2" key={tabName}>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === tabName }, "tab-name", "text-center")}
                                onClick={() => { this.toggle(tabName); }}
                                >
                                {tabName}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <OverviewTabPane/>
                        <GuestsTabPane/>
                        <TeamsTabPane/>
                        <SettingsTabPane/>
                        <ValidationTabPane/>
                    </TabContent>
                </div>
                
            </div>
        )
    }
}

export default Event;