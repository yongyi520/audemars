import React, { Component } from 'react';
import './TagsTable.sass';
import { Table } from 'reactstrap';
import { TagsRow } from './TagsRow'

export class TagsTable extends Component {

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
            <Table id="TagsTable">
                <thead className="table-header">
                    <tr>
                        <th className="column-name">NAME</th>
                        <th className="column-color">COLOR</th>
                        <th className="column-3"></th>
                        <th className="column-actions">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    { exampleRowData.map( data => (
                        <TagsRow key={data._id} data={data}/>
                    ))}
                    
                </tbody>
            </Table>
        )
    }

}