import React, { Component } from 'react';
import './OverviewTabPane.sass';

import { TabPane } from 'reactstrap';
import { StatisticsPanel } from '../../../component/Panels/Statistics/StatisticsPanel';
import { HistoryLogsPanel } from '../../../component/Panels/HistoryLogs/HistoryLogsPanel';

export class OverviewTabPane extends Component {
    render(){
        return (
            <TabPane tabId="Overview" id="Overview">
                <div className="d-flex flex-row align-items-center mt-4 mb-3 overview-content-msg-alert">
                    <span>You have 112 changes to review for 25 guests</span>
                </div>
                <StatisticsPanel/>
                <HistoryLogsPanel />
            </TabPane>
        )
    }
}