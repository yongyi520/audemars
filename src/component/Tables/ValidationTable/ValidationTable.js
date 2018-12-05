import React, { Component } from 'react';
import './ValidationTable.sass';
import { Table } from 'reactstrap';

import { ValidationRow } from './ValidationRow'
import { NormalButton } from '../../Buttons/NormalButton';

export class ValidationTable extends Component {
    render(){
        return (
            <div id="ValidationTable">
                <div className="table-header">
                    <div className="column-before">BEFORE</div>
                    <div className="column-after">AFTER</div>
                    <div className="column-actions">ACTIONS</div>
                </div>
                <div className="table-body">
                    <div className="guest-validation">
                        <div className="main-row">
                            <div  className="row-left">

                            </div>

                            <div className="row-right column-actions flex-row-center">
                                <NormalButton label="Refuse all"/>
                                <NormalButton label="Validate all"/>
                            </div>

                        </div>
                        <div className="sub-row">
                            <div className="row-left">
                            
                            </div>
                            <div className="row-right column-actions flex-row-center">
                                <NormalButton label="Refuse"/>
                                <NormalButton label="Validate"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}