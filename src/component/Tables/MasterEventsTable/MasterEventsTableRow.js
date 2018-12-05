import React from 'react';
import PropTypes from 'prop-types';
import './MasterEventsTableRow.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBan } from '@fortawesome/free-solid-svg-icons'

import { Avatar } from '../../Avatar/Avatar'

/**
 * 
 * @param {eventData} param0 
 */
export const MasterEventsTableRow = ({data}) => (
    <tr>
        <td className="avatar-row">
            {/* to make sure only maximum of 3 avatars are displayed */}
            { data.admins.slice(0,3).map( admin => (
                <Avatar key={admin._id} profile={admin}/>
            ))}
            
        </td>
        <td>{data.privateName}</td>
        <td>{data.guests.invited} invited, {data.guests.confirmed} confirmed</td>
        <td>{data.date.toString()}</td>
        <td className="actions-row">
            <div className="icon-container"><FontAwesomeIcon icon={faEye} size="2x"/></div>
            <div className="icon-container"><FontAwesomeIcon icon={faBan} size="2x"/></div>
        </td>
    </tr>
)

MasterEventsTableRow.propTypes = {
    data: PropTypes.object.isRequired
}