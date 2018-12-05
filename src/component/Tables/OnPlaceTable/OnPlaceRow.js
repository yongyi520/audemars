import React from 'react';
import PropTypes from 'prop-types';
import './OnPlaceRow.sass';

export const OnPlaceRow = ({data}) => (
    <tr className="on-place-row">
        <td className="column-first-name">John</td>
        <td className="column-last-name">Malkovitch</td>
        <td className="column-3"></td>
        <td className="column-actions"></td>
    </tr>
)

OnPlaceRow.propTypes = {
    data: PropTypes.object
}