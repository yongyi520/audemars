import React from 'react';
import PropTypes from 'prop-types';
import './EventAdminsRow.sass';

import { Avatar } from '../../Avatar/Avatar'

export const EventAdminsRow = ({data}) => (
    <tr>
        <td className="column-1"><div className="flex-row-center justify-content-center"><Avatar label="JM"/></div></td>
        <td className="column-first-name">John</td>
        <td className="column-last-name">Malkovitch</td>
        <td className="column-3"></td>
        <td className="column-actions"></td>
    </tr>
)

EventAdminsRow.propTypes = {
    data: PropTypes.object
}