import React, { Component } from 'react';
import './InvitersTable.sass';
import { Table } from 'reactstrap';

import { InvitersRow } from './InvitersRow'

export class InvitersTable extends Component {

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
            <Table id="InvitersTable">
                <thead className="table-header">
                    <tr>
                        <th className="column-1"></th>
                        <th className="column-first-name">FIRST NAME</th>
                        <th className="column-last-name">LAST NAME</th>
                        <th className="column-quota">QUOTA</th>
                        <th className="column-lists">LISTS</th>
                        <th className="column-actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {/* { exampleRowData.map( data => (
                        <EventAdminsRow key={data._id} data={data}/>
                    ))} */}
                    <InvitersRow/>
                </tbody>
            </Table>
        )
    }

}