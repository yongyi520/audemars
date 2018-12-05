import React, { Component } from 'react';
import './GuestListsTable.sass';
import { Table } from 'reactstrap';

import { GuestListsRow } from './GuestListsRow'

export class GuestListsTable extends Component {

    render(){
        const exampleRowData = [
            {
                _id: "a",
                admins: [
                    {
                        _id: "1",
                        firstname: "James",
                        lastname: "Dean",
                        url: null
                    }
                ],
                privateName: "C2019 New York Presentation",
                guests: {
                    invited: 100,
                    confirmed: 82
                },
                date: new Date()
            },
            {
                _id: "b",
                admins: [
                    {
                        _id: "1",
                        firstname: "James",
                        lastname: "Dean",
                        url: null
                    }
                ],
                privateName: "C2019 New York Presentation",
                guests: {
                    invited: 100,
                    confirmed: 82
                },
                date: new Date()
            }
        ]
        return(
            <Table id="GuestListsTable">
                <thead className="table-header">
                    <tr>
                        <th className="column-long-name">LONG NAME</th>
                        <th className="column-short-name">SHORT NAME</th>
                        <th className="column-3"></th>
                        <th className="column-actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    { exampleRowData.map( data => (
                        <GuestListsRow key={data._id} data={data}/>
                    ))}
                    
                </tbody>
            </Table>
        )
    }

}