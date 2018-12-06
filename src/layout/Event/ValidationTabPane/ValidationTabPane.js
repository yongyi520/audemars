import React, { Component } from 'react';
import './ValidationTabPane.sass';

import { TabPane } from 'reactstrap';
import { ValidationTable } from '../../../component/Tables/ValidationTable/ValidationTable';
import { ButtonToolbar, Input } from 'reactstrap';
import { NormalButton } from '../../../component/Buttons/NormalButton';
import { FilterButtonGroup } from '../../../component/Buttons/FilterButtonGroup';
import { ValidationFooter } from '../../../component/Footer/ValidationFooter';
export class ValidationTabPane extends Component {
    render(){
        const tagOptions = [
            {
                name: "Any tag",
                selected: true
            },
            {
                name: "UVIP",
                selected: false 
            },
            {
                name: "VIP",
                selected: false 
            },
            {
                name: "Press",
                selected: false 
            }
        ]
        const eventOptions = [
            {
                name: "Any event",
                selected: true
            },
            {
                name: "Cocktail",
                selected: false
            },
            {
                name: "Dinner",
                selected: false
            }
        ]
        const validationOptions = [
            {
                name: "validation needed",
                selected: true
            },
            {
                name: "already validated",
                selected: false
            }
        ]
        return (
            <TabPane tabId="Validation" id="Validation">
                <ButtonToolbar>
                    <FilterButtonGroup className="filter-btn-long hover-none" options={validationOptions}/>
                    <FilterButtonGroup className="filter-btn-short hover-none" options={eventOptions}/>
                    <FilterButtonGroup className="filter-btn-short hover-none" options={tagOptions}/>
                </ButtonToolbar>
                <div className="warning-panel flex-row-center">
                    <span>Default campaign log (for users that don't have one)</span>
                    <Input defaultValue="C2019 - Campaign Log 1"/>
                </div>
                <div className="validation-header flex-row-center justify-content-between">
                    <div className="validation-header-left">
                        <span>25 guests updated, 112 changes</span>
                    </div>
                    <div className="validation-header-right flex-row-center justify-content-end">
                        <NormalButton label="Refuse all" className="validation-btn"/>
                        <NormalButton label="Validate all" className="validation-btn"/>
                    </div>
                </div>
                <ValidationTable/>
                <ValidationFooter/>
            </TabPane>
        )
    }
}