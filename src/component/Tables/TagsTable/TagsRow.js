import React from 'react';
import PropTypes from 'prop-types';
import './TagsRow.sass';

import { EditButton } from '../../Buttons/EditButton';
import { BanButton } from '../../Buttons/BanButton';
import { ColorCircle } from '../../ColorCircle/ColorCircle';

export const TagsRow = ({data}) => (
    <tr>
        <td className="column-name">
            <div className="flex-row-center">
                <span>UVIP</span>
                <EditButton/>
            </div>
        </td>
        <td className="column-color">
            <div className="flex-row-center justify-content-between">
                <div className="placeholder"></div>
                <ColorCircle color="red"/>
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

TagsRow.propTypes = {
    data: PropTypes.object.isRequired
}