import React, { Component } from 'react';
import './ValidationTabPane.sass';

import { TabPane } from 'reactstrap';
import { ValidationTable } from '../../../component/Tables/ValidationTable/ValidationTable';
import { ButtonToolbar, ButtonGroup, Input } from 'reactstrap';
import { NormalButton } from '../../../component/Buttons/NormalButton';

export class ValidationTabPane extends Component {
    render(){
        return (
            <TabPane tabId="Validation" id="Validation">
                <ButtonToolbar>
                    <ButtonGroup>
                        <NormalButton label="validation needed"/>
                        <NormalButton label="already validated"/>
                    </ButtonGroup>
                    <ButtonGroup>
                        <NormalButton label="Any event"/>
                        <NormalButton label="Cocktail"/>
                        <NormalButton label="Dinner"/>
                    </ButtonGroup>
                    <ButtonGroup>
                        <NormalButton label="Any tag"/>
                        <NormalButton label="UVIP"/>
                        <NormalButton label="VIP"/>
                        <NormalButton label="Press"/>
                    </ButtonGroup>
                </ButtonToolbar>
                <div className="default-campaign-log flex-row-center">
                    <span>Default campaign log (for users that don't have one)</span>
                    <Input defaultValue="C2019 - Campaign Log 1"/>
                </div>
                <div className="validation-header flex-row-center justify-content-between">
                    <div className="validation-header-left">
                        <span>25 guests updated, 112 change</span>
                    </div>
                    <div className="validation-header-right flex-row-center justify-content-end">
                        <NormalButton label="Refuse all"/>
                        <NormalButton label="Validate all"/>
                    </div>
                </div>
                <ValidationTable/>
            </TabPane>
        )
    }
}