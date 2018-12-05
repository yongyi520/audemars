import React, { Component } from 'react';
import './EventAdminsTable.sass';
import { Table } from 'reactstrap';

import { EventAdminsRow } from './EventAdminsRow'

export class EventAdminsTable extends Component {

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
            <Table id="EventAdminsTable">
                <thead className="table-header">
                    <tr>
                        <th className="column-1"></th>
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
                    <EventAdminsRow/>
                </tbody>
            </Table>
        )
    }

}