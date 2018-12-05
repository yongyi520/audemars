import React, { Component } from 'react';
import './OnPlaceTable.sass';
import { Table } from 'reactstrap';

import { OnPlaceRow } from './OnPlaceRow'

export class OnPlaceTable extends Component {

    render(){
        const exampleRowData = [
            {
                _id: 1
            },
            {
                _id: 2
            }
        ]
        return(
            <Table id="OnPlaceTable">
                <thead className="table-header">
                    <tr>
                        <th className="column-first-name">FIRST NAME</th>
                        <th className="column-last-name">LAST NAME</th>
                        <th className="column-3"></th>
                        <th className="column-actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {/* { exampleRowData.map( data => (
                        <EventAdminsRow key={data._id} data={data}/>
                    ))} */}
                    <OnPlaceRow/>
                    <OnPlaceRow/>
                    <OnPlaceRow/>
                </tbody>
            </Table>
        )
    }

}