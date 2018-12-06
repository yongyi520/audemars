import React, { Component } from 'react';
import './AllEvents.sass';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import { Header } from '../../component/Header/Header'
import { AddButton } from '../../component/Buttons/AddButton'
import {  MasterEventsTable } from '../../component/Tables/MasterEventsTable/MasterEventsTable';

class AllEvents extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
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
        return (
            <div id="AllEvents">
                <Header/>
                <div className="container-fluid mt-5 mb-3 pt-1">
                    <Nav tabs>
                        <NavItem className="mr-1">
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' }, "tab-name", "text-center")}
                            onClick={() => { this.toggle('1'); }}
                            >
                            Incoming
                            </NavLink>
                        </NavItem>
                        <NavItem className="mr-1">
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' }, "tab-name", "text-center")}
                            onClick={() => { this.toggle('2'); }}
                            >
                            Past
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <div className="d-flex flex-row-reverse mt-4 mb-3 content-row">
                                <AddButton buttonName="Add a master event" onClick={() => {}}/>
                            </div>
                            <MasterEventsTable/>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="d-flex flex-row-reverse mt-4 mb-3 content-row">
                                
                            </div>
                            <MasterEventsTable/>
                        </TabPane>
                    </TabContent>
                </div>
                
            </div>
        )
    }
}

export default AllEvents;