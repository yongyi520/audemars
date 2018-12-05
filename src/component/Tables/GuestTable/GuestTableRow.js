import React from 'react';
import PropTypes from 'prop-types';
import './GuestTableRow.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Input, InputGroup } from 'reactstrap';

import { EditButton } from '../../Buttons/EditButton';
import { BanButton } from '../../Buttons/BanButton';
import { Tag } from '../../Tag/Tag';
import { DropdownMenuComponent } from '../../Dropdowns/Dropdown';
import { Avatar } from '../../Avatar/Avatar';

export const GuestTableRow = ({data}) => (
    <tr className="guest-table-row">
        <td className="user-col">
            <div className="user flex-column-center">
                <Avatar label="2" small/>
                <FontAwesomeIcon icon={faUsers}/>
                {/* <Input type="checkbox"/> */}
            </div>
            
        </td>

        <td className="crm-col">
            <div className="crm flex-column-center">
                <FontAwesomeIcon icon={faCheckCircle}/>
            </div>
        </td>
        <td className="invited-by-col">
            <div className="flex-column-center">
                <span>AP Japan</span>
                <span>AP US</span>
            </div>
        </td>
        <td className="first-name-col first-name-row">
            <span>John</span>
        </td>
        <td className="last-name-col last-name-row">
            Malkovitch
        </td>
        <td className="events-col">
            <div className="flex-row-center">
            <Tag name="Cocktail"/>
            <Tag name="Dinner" color="gray"/>
            </div>
            
        </td>
        <td className="tags-col">
            <div className="flex-row-center"><Tag name="UVIP" hasX={true} bold color="red"/></div>
        </td>
        <td className="status-col">
            <DropdownMenuComponent/>
        </td>
        <td className="actions-col actions-row flex-row-center">
            <EditButton/>
            <BanButton/>
        </td>
    </tr>
)

GuestTableRow.propTypes = {
    data: PropTypes.object
}