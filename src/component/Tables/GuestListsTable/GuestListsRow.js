import React from 'react';
import PropTypes from 'prop-types';
import './GuestListsRow.sass';

import { EditButton } from '../../Buttons/EditButton';
import { BanButton } from '../../Buttons/BanButton';
export const GuestListsRow = ({data}) => (
    <tr>
        <td className="column-long-name">
            <div className="flex-row-center">
                <span>AP Exhibition</span>
                <EditButton/>
            </div>
        </td>
        <td className="column-short-name">
            <div className="flex-row-center">
                <span>APE</span>
                <EditButton/>
            </div>
        </td>
        <td className="column-3"></td>
        <td className="column-actions">
            <div className="flex-row-center">
                <BanButton/>
            </div>
        </td>
    </tr>
)

GuestListsRow.propTypes = {
    data: PropTypes.object.isRequired
}