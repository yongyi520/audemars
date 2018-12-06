import React, { Component } from 'react';
import './GuestsTabPane.sass';

import { TabPane, Input } from 'reactstrap';

import { AddButton } from '../../../component/Buttons/AddButton';
import { GuestFilter } from '../../../component/Tables/GuestTable/GuestFilter';
import { GuestTable } from '../../../component/Tables/GuestTable/GuestTable';

import { Tag } from '../../../component/Tag/Tag'
import { GuestFooter } from '../../../component/Footer/GuestFooter';

export class GuestsTabPane extends Component {
    render(){
        return (
            <TabPane tabId="Guests" id="Guests">
                <div className="guests-wrapper">
                    <div className="left">
                        <GuestFilter/>
                        <GuestFilter/>
                        <GuestFilter/>
                    </div> 
                    <div className="right">
                        <div className="action-header">
                            <div className="action-header-left">
                                <Input placeholder="Search by first or last name"/>
                                <Tag name="John Petterson" hasX={true}/>
                            </div>
                            <div className="action-header-right">
                                <AddButton buttonName="Bulk add" onClick={()=>{}}/>
                                <AddButton buttonName="Add a campaign list" onClick={()=>{}}/>
                                <AddButton buttonName="Add a guest" onClick={()=>{}}/>
                            </div>
                        </div>
                        <GuestTable/>
                        <GuestFooter/>
                    </div>
                </div>
            </TabPane>
        )
    }
}