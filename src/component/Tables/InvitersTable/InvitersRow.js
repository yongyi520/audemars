import React from 'react';
import PropTypes from 'prop-types';
import './InvitersRow.sass';
import { Progress } from 'reactstrap';
import { Avatar } from '../../Avatar/Avatar'
import { EditButton } from '../../Buttons/EditButton'
import { Tag } from '../../Tag/Tag';

export const InvitersRow = ({data}) => (
    <tr className="inviters-row">
        <td className="column-1"><div className="flex-row-center justify-content-center"><Avatar label="JM"/></div></td>
        <td className="column-first-name">John</td>
        <td className="column-last-name">Malkovitch</td>
        <td className="column-quota">
            <div className="flex-row-center">
                <Progress value={40}>2/5</Progress>
                <EditButton/>
            </div>
        </td>
        <td className="column-lists">
            <div className="flex-row-center">
                <Tag name="APE"/>
                <Tag name="APNA" color="gray"/>
            </div>
            
        </td>
        <td className="column-actions"></td>
    </tr>
)

InvitersRow.propTypes = {
    data: PropTypes.object
}