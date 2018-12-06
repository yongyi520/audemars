import React, { Component } from 'react';
import './Dropdown.sass';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class DropdownMenuComponent extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render(){
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropdown-menu-component">
                <DropdownToggle caret>
                    Confirmed 
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Confirmed</DropdownItem>
                    <DropdownItem>Not Confirmed</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}
