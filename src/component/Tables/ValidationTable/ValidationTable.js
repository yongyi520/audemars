import React, { Component } from 'react';
import './ValidationTable.sass';
import { Table, Input } from 'reactstrap';

import { ValidationMainRow } from './ValidationMainRow'
import { NormalButton } from '../../Buttons/NormalButton';
import { ValidationSubRow } from './ValidationSubRow';

export class ValidationTable extends Component {
    render(){
        const validationData = [
            {
                field: 'First name',
                old: 'John',
                new: 'John'
            },
            {
                field: 'Last name',
                old: 'Malkovitch',
                new: 'Malkovikch'
            },
            {
                field: 'Opt-in',
                old: false,
                new: true
            },
            {
                field: 'Country',
                old: 'France',
                new: 'Switzerland'
            }
        ]
        return (
            <Table id="ValidationTable">
                <tr className="table-header flex-row-center">
                    <th className="column-before flex-row-center">BEFORE</th>
                    <th className="column-after flex-row-center">AFTER</th>
                    <th className="column-actions flex-row-center">ACTIONS</th>
                </tr>
                <tbody className="table-body">
                    <ValidationMainRow/>
                    { validationData.map( data => (
                        <ValidationSubRow data={data}/>
                    ))}
                    <ValidationMainRow/>
                    { validationData.map( data => (
                        <ValidationSubRow data={data}/>
                    ))}
                </tbody>
                
            </Table>
        )
    }
}