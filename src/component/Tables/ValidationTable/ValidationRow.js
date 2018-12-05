import React, { Component } from 'react';
import './ValidationRow.sass';

import { Input } from 'reactstrap';
import { NormalButton } from '../../Buttons/NormalButton';


export class ValidationRow extends Component {
    render(){
        return (
            <div>
            <tr className="validation-row-container">
                <td colspan="3" className="wrapper">
                    <div className="flex-col-center">
                        <div className="validation-row flex-row-center justify-content-between">
                            <div className="row-left">John Malkovitch (3 changes)</div>
                            <div className="row-right column-actions flex-row-center">
                                <NormalButton label="Refuse all"/>
                                <NormalButton label="Validate all"/>
                            </div>
                        </div>
                        <div className="validation-sub-row flex-row-center justify-content-between">
                            <div className="row-left flex-row-center">
                                <div className="before">
                                    First name: John
                                </div>
                                <div className="after">
                                    <input defaultValue="John"/>
                                </div>
                            </div>
                            <div className="row-right column-actions flex-row-center">
                                <NormalButton label="Refuse all"/>
                                <NormalButton label="Validate all"/>
                            </div>
                        </div>
                        <div className="validation-sub-row flex-row-center justify-content-between">
                            <div className="row-left flex-row-center">
                                <div className="before">
                                    Last name: Malkovitch
                                </div>
                                <div className="after">
                                    <input defaultValue="Malkovitch"/>
                                </div>
                            </div>
                            <div className="row-right column-actions flex-row-center">
                                <NormalButton label="Refuse all"/>
                                <NormalButton label="Validate all"/>
                            </div>
                        </div>
                        <div className="validation-sub-row flex-row-center justify-content-between">
                            <div className="row-left flex-row-center">
                                <div className="before">
                                    First name: John
                                </div>
                                <div className="after">
                                    <input defaultValue="John"/>
                                </div>
                            </div>
                            <div className="row-right column-actions flex-row-center">
                                <NormalButton label="Refuse all"/>
                                <NormalButton label="Validate all"/>
                            </div>
                        </div>
                        <div className="validation-sub-row flex-row-center justify-content-between">
                            <div className="row-left flex-row-center">
                                <div className="before">
                                    Country: Frace
                                </div>
                                <div className="after">
                                    <input defaultValue="Switzerland"/>
                                </div>
                            </div>
                            <div className="row-right column-actions flex-row-center">
                                <NormalButton label="Refuse all"/>
                                <NormalButton label="Validate all"/>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            </div>
        )
    }
} 
