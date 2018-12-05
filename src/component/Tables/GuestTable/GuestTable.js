import React, { Component } from 'react';
import './GuestTable.sass';
import { Table } from 'reactstrap';
import { GuestTableRow } from './GuestTableRow';
export class GuestTable extends Component {
    render(){
        return (
            <Table id="GuestTable">
                <thead className="table-header">
                    <tr>
                        <th className="first-column"></th>
                        <th className="crm">CRM</th>
                        <th className="invited-by">INVITED BY</th>
                        <th className="first-name">FIRST NAME</th>
                        <th className="last-name">LAST NAME</th>
                        <th className="events">EVENTS</th>
                        <th className="tags">TAGS</th>
                        <th className="status">STATUS</th>
                        <th className="actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <GuestTableRow/>
                    <GuestTableRow/>
                    <GuestTableRow/>
                </tbody>
            </Table>
        )
    }
}
