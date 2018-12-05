import React, { Component } from 'react';
import './GuestFooter.sass';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { NormalButton } from '../Buttons/NormalButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export class GuestFooter extends Component {
    render(){
        return(
            <div className="guest-footer flex-row-center">
                <div className="guest-footer-left flex-row-center">
                    <span className="guest-footer-left-label">Selected guests</span>
                    <NormalButton label="Group" grey/>
                    <NormalButton label="Delete" grey/>
                </div>
                <div className="guest-footer-right flex-row-center">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink className="font-weight-bold disable">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="disable"><FontAwesomeIcon icon={faChevronLeft}/></PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="font-weight-bold">1-10 / 125</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink><FontAwesomeIcon icon={faChevronRight}/></PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="font-weight-bold">12</PaginationLink>
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}