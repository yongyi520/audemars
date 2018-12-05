import React, { Component } from 'react';
import './GuestFilter.sass';
import {  ListGroup, ListGroupItem } from 'reactstrap';


export class GuestFilter extends Component {
    render(){
        return (
            <div className="filter">
                <div className="header">
                    Status
                </div>
                <ListGroup>
                    <ListGroupItem className="selected">
                        Any Status
                    </ListGroupItem>
                    <ListGroupItem>
                        Confirmed
                    </ListGroupItem>
                    <ListGroupItem>
                        Attended
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}