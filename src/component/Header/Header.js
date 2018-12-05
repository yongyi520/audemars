import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.sass';
import { MinorHeader } from '../../component/Header/MinorHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

export const Header = ({event}) => (
    <div className="container-fluid mt-4 mb-4">
        <div className="d-flex flex-row justify-content-between align-items-center">
            <h2 className="font-weight-bold">
            { event ?
                <span className="header-left">{event.privateName}<span className="badge-custom">Starting Soon</span></span>
                :
                <span className="header-left">All master events</span>
            }
                
            </h2>
            <div className="text-secondary header-right">
                <FontAwesomeIcon icon={faGlobeAmericas}/>
                <span>New York - GMT +6</span>
            </div>
        </div>
        { event ?
            <div className="d-flex flex-row justify-content-between align-items-center">
                <MinorHeader/>
            </div>
            :
            null
        }
        
    </div>
)
Header.propTypes = {
    event: PropTypes.object
}