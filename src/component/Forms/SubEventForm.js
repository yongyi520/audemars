import React, { Component } from 'react';
import './SubEventForm.sass';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { Form, FormGroup, Input } from 'reactstrap';
import { NormalButton } from '../Buttons/NormalButton';
import { BanButton } from '../Buttons/BanButton';
import { EditButton } from '../Buttons/EditButton';

export class SubEventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            startTime: new Date(),
            endDate: new Date(),
            endTime: new Date(),
            timezone: null
        };
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
        this.handleChangeTimezone = this.handleChangeTimezone.bind(this);
    }

    handleChangeStartDate(startDate) {
        this.setState({
            startDate
        });
    }

    handleChangeStartTime(startTime) {
        this.setState({
            startTime
        });
    }

    handleChangeEndDate(endDate) {
        this.setState({
            endDate
        });
    }

    handleChangeEndTime(endTime) {
        this.setState({
            endTime
        });
    }

    handleChangeTimezone = (timezone) => {
        this.setState({ timezone });
      }

    render(){
        const timezoneOptions = [
            { value: 'usanewyork', label: 'USA / New York (GMT + 6)'},
            { value: 'usanewyork', label: 'USA / New York (GMT + 6)'},
            { value: 'usanewyork', label: 'USA / New York (GMT + 6)'}
        ]
        return (
            <Form className="sub-event-form">
                    <div className="sub-event-header flex-row-center justify-content-between">
                        <div className="header-left">
                            <div className="sub-event-title">
                                Cocktails
                            </div>
                            <EditButton/>
                        </div>
                        <div className="header-right">
                            <BanButton/>
                        </div>
                    </div>
                    <div className="input-fields-group">
                        <FormGroup className="flex-row-center">
                            <label>Short name</label>
                            <div className="column-input">
                                <Input/>
                            </div>
                        </FormGroup>
                        <FormGroup className="flex-row-center">
                            <label>Start date</label>
                            <div className="column-input">
                                <DatePicker
                                    className="date-input"
                                    selected={this.state.startDate}
                                    onChange={this.handleChangeStartDate}
                                />
                                <DatePicker
                                    className="time-input"
                                    selected={this.state.startTime}
                                    onChange={this.handleChangeStartTime}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="h:mm aa"
                                    timeCaption="Time"
                                />
                            </div>
                            
                        </FormGroup>
                        <FormGroup className="flex-row-center">
                            <label>End date</label>
                            <div className="column-input">
                                <DatePicker
                                    className="date-input"
                                    selected={this.state.endDate}
                                    onChange={this.handleChangeEndDate}
                                />
                                <DatePicker
                                    className="time-input"
                                    selected={this.state.endtime}
                                    onChange={this.handleChangeEndTime}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="h:mm aa"
                                    timeCaption="Time"
                                />
                            </div>
                        </FormGroup>
                        <FormGroup className="flex-row-center">
                            <label>Timezone</label>
                            <div className="column-input">
                                <Select
                                    styles={{borderColor: '#e6e6e6'}}
                                    value={this.state.timezone}
                                    onChange={this.handleChangeTimezone}
                                    options={timezoneOptions}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-end">
                            <NormalButton label="Save the changes"/>
                        </FormGroup>
                    </div>
                    
                </Form>
        )
    }
}