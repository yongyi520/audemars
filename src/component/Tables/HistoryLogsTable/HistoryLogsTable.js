import React, { Component } from 'react';
import './HistoryLogsTable.sass';
import { Table } from 'reactstrap';

import { HistoryLogsRow } from './HistoryLogsRow'

export class HistoryLogsTable extends Component {

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
            },
            {
                _id: "c",
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
        ]
        return(
            <Table id="HistoryLogsTable">
                <thead className="table-header">
                    <tr>
                        <th className="author">AUTHOR</th>
                        <th className="action">ACTION</th>
                        <th className="date">DATE</th>
                    </tr>
                </thead>
                <tbody>
                    { exampleRowData.map( data => (
                        <HistoryLogsRow key={data._id} data={data}/>
                    ))}
                    
                </tbody>
            </Table>
        )
    }

}