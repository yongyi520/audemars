import React, { Component } from 'react';
import './MasterEventsTable.sass';
import { Table } from 'reactstrap';

import { MasterEventsTableRow } from './MasterEventsTableRow'

export class MasterEventsTable extends Component {
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
                    },
                    {
                        _id: "2",
                        firstname: "James",
                        lastname: "Dean",
                        url: null
                    },
                    {
                        _id: "3",
                        firstname: "James",
                        lastname: "Dean",
                        url: null
                    },
                    // {
                    //     _id: "4",
                    //     firstname: "James",
                    //     lastname: "Dean",
                    //     url: null
                    // },
                    // {
                    //     _id: "5",
                    //     firstname: "James",
                    //     lastname: "Dean",
                    //     url: null
                    // },
                ],
                privateName: "C2019 New York Presentation",
                guests: {
                    invited: 100,
                    confirmed: 82
                },
                date: new Date()
            },
        ]
        console.log(exampleRowData)
        return (
            <Table id="MasterEventsTable">
                <thead className="table-header">
                    <tr>
                        <th className="event-admin">EVENT ADMIN</th>
                        <th className="event-private-name">EVENT PRIVATE NAME</th>
                        <th className="event-guest">GUESTS</th>
                        <th className="event-date">DATE</th>
                        <th className="event-actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    { exampleRowData.map( data => (
                        <MasterEventsTableRow key={data._id} data={data}/>
                    ))}
                </tbody>
            </Table>  
        )
    }
}

