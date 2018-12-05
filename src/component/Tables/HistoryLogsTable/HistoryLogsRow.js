import React from 'react';
import PropTypes from 'prop-types';
import './HistoryLogsRow.sass';

import { Avatar } from '../../Avatar/Avatar'

export const HistoryLogsRow = ({data}) => (
    <tr>
        <td className="author-content">
            <Avatar />
            <span className="name ml-2">John Doe</span>
            <span className="position">(AP)</span>
        </td>
        <td><span>Validated the invite of John Going</span></td>
        <td><span>Just now</span></td>
    </tr>
)

HistoryLogsRow.propTypes = {
    data: PropTypes.object.isRequired
}