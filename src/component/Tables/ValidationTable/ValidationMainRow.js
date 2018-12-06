import React, { Component } from 'react';
import './ValidationMainRow.sass';

import { NormalButton } from '../../Buttons/NormalButton';


export class ValidationMainRow extends Component {
    render(){
        return (
            <tr className="main-row flex-row-center">
                <td rowspan="2" className="row-left flex-row-center">
                    <span>John Malkovitch (3 changes)</span>
                </td>

                <td className="row-right column-actions flex-row-center">
                    <NormalButton label="Refuse all" className="validation-btn"/>
                    <NormalButton label="Validate all" className="validation-btn"/>
                </td>
            </tr>
        )
    }
} 
