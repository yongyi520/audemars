import React, { Component } from 'react';
import './ValidationSubRow.sass';
import classnames from 'classnames';
import { Input } from 'reactstrap';
import { NormalButton } from '../../Buttons/NormalButton';
import { RadioButtonGroup } from '../../Buttons/RadioButtonGroup';

export class ValidationSubRow extends Component {
    render(){
        const {data} = this.props;
        return (
            <tr className="sub-row flex-row-center justify-content-end">
                <td className={classnames("row-left flex-row-center", data.new !== data.old ? 'change': '')}>
                    <div className="input-row flex-row-center"> 
                        <div className="label flex-row-center">
                            <span className="name">{data.field}:</span>
                            <span className='value'>
                                {typeof data.old === 'boolean'? 
                                    (data.old === true? 'Yes' : 'No')
                                    :
                                    data.old}
                            </span>
                        </div>
                        <div className="input flex-row-center">
                            {typeof data.new === 'boolean'? 
                                    <RadioButtonGroup data={data}/>
                                    :
                                    <Input defaultValue={data.new}/>
                            }
                            
                        </div>
                    </div> 
                </td>
                <td className="row-right column-actions flex-row-center">
                    <NormalButton label="Refuse" className="validation-btn" grey={data.new === data.old}/>
                    <NormalButton label="Validate" className="validation-btn" grey={data.new === data.old}/>
                </td>
                
            </tr>
        )
    }
} 
