import React from 'react';
import PropTypes from 'prop-types';
import './HistoryLogsPanel.sass';

import { HistoryLogsTable } from '../../Tables/HistoryLogsTable/HistoryLogsTable'

export const HistoryLogsPanel = ({history}) => (
    <div className="history-log-panel mb-4 mt-2">
        <div className="history-log-title mt-4 mb-2">History Logs</div>
        <HistoryLogsTable/>
    </div>
)

HistoryLogsPanel.propTypes = {
    history: PropTypes.object
}