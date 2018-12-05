import React from 'react';
import PropTypes from 'prop-types';
import './StatisticsPanel.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const StatisticsPanel = ({event}) => (
    <div className="stat-panel mt-2 mb-4">
        <div className="stat-title">Statistics</div>
        <div className="stat-body">
            <div className="stat-box">
                <div className="event-name">All events</div>
                <div className="event-stat">
                    <div className="event-stat-invited-attended">
                        <div className="number">
                            125
                        </div>
                        <div className="label">
                            Invited
                        </div>
                    </div>
                    <div className="event-stat-arrow">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                    <div className="event-stat-invited-attended">
                        <div className="number">
                            94
                        </div>
                        <div className="label">
                            Attended
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat-box">
                <div className="event-name">Cocktail</div>
                <div className="event-stat">
                    <div className="event-stat-invited-attended">
                        <div className="number">
                            84
                        </div>
                        <div className="label">
                            Invited
                        </div>
                    </div>
                    <div className="event-stat-arrow">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                    <div className="event-stat-invited-attended">
                        <div className="number">
                            73
                        </div>
                        <div className="label">
                            Attended
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat-box">
                <div className="event-name">Cocktail</div>
                <div className="event-stat">
                    <div className="event-stat-invited-attended">
                        <div className="number">
                            67
                        </div>
                        <div className="label">
                            Invited
                        </div>
                    </div>
                    <div className="event-stat-arrow">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                    <div className="event-stat-invited-attended">
                        <div className="number">
                            45
                        </div>
                        <div className="label">
                            Attended
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                            
)

StatisticsPanel.propTypes = {
    event: PropTypes.object
}

